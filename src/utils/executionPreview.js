function tokenize(source) {
  const tokens = [];
  let index = 0;

  while (index < source.length) {
    if (/\s/.test(source[index])) {
      index += 1;
      continue;
    }

    const rest = source.slice(index);
    const number = rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
    if (number) {
      tokens.push({ type: "number", value: Number(number[0]), isFloat: /[.eE]/.test(number[0]) });
      index += number[0].length;
      continue;
    }

    if (/[A-Za-z_]/.test(source[index])) {
      const name = rest.match(/^[A-Za-z_]\w*/)[0];
      tokens.push({ type: "name", value: name });
      index += name.length;
      continue;
    }

    if (source[index] === "'" || source[index] === '"') {
      const quote = source[index];
      let value = "";
      index += 1;
      let closed = false;

      while (index < source.length) {
        const char = source[index];
        if (char === quote) {
          index += 1;
          closed = true;
          break;
        }
        if (char === "\\") {
          const next = source[index + 1];
          if (next === undefined) return null;
          const escapes = { n: "\n", r: "\r", t: "\t", "\\": "\\", "'": "'", '"': '"' };
          value += Object.prototype.hasOwnProperty.call(escapes, next) ? escapes[next] : `\\${next}`;
          index += 2;
          continue;
        }
        value += char;
        index += 1;
      }

      if (!closed) return null;
      tokens.push({ type: "string", value });
      continue;
    }

    const operator = ["**", "//"].find((candidate) => rest.startsWith(candidate));
    if (operator) {
      tokens.push({ type: "operator", value: operator });
      index += operator.length;
      continue;
    }

    if ("+-*/%()".includes(source[index])) {
      tokens.push({ type: "operator", value: source[index] });
      index += 1;
      continue;
    }

    return null;
  }

  return tokens;
}

function quotePythonString(value) {
  if (!value.includes("'")) {
    return `'${value.replaceAll("\\", "\\\\").replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("\t", "\\t")}'`;
  }
  if (!value.includes('"')) {
    return `"${value.replaceAll("\\", "\\\\").replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("\t", "\\t")}"`;
  }
  return `'${value.replaceAll("\\", "\\\\").replaceAll("'", "\\'").replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("\t", "\\t")}'`;
}

function parseStringExpression(tokens) {
  if (!tokens?.length) return null;
  let value = "";
  let hasVariable = false;
  let expectString = true;

  for (const token of tokens) {
    if (expectString && (token.type === "string" || token.type === "name")) {
      if (token.type === "string") value += token.value;
      else hasVariable = true;
      expectString = false;
    } else if (!expectString && token.type === "operator" && token.value === "+") {
      expectString = true;
    } else {
      return null;
    }
  }

  return expectString ? null : { value, hasVariable };
}

function evaluateArithmetic(tokens) {
  let index = 0;

  function combine(left, right, operator) {
    if (left.hasVariable || right.hasVariable) return { hasVariable: true };
    const a = left.value;
    const b = right.value;
    let value;
    let isFloat = left.isFloat || right.isFloat;

    switch (operator) {
      case "+": value = a + b; break;
      case "-": value = a - b; break;
      case "*": value = a * b; break;
      case "/":
        if (b === 0) throw new Error("division by zero");
        value = a / b;
        isFloat = true;
        break;
      case "//":
        if (b === 0) throw new Error("division by zero");
        value = Math.floor(a / b);
        break;
      case "%":
        if (b === 0) throw new Error("division by zero");
        value = a - Math.floor(a / b) * b;
        break;
      case "**":
        if (Math.abs(b) > 1000) throw new Error("exponent too large");
        value = a ** b;
        isFloat ||= b < 0;
        break;
      default: throw new Error("unsupported operator");
    }

    if (!Number.isFinite(value)) throw new Error("non-finite result");
    return { value, isFloat };
  }

  function parsePrimary() {
    const token = tokens[index++];
    if (!token) throw new Error("missing operand");
    if (token.type === "number") return { value: token.value, isFloat: token.isFloat };
    if (token.type === "name") return { hasVariable: true };
    if (token.type === "operator" && token.value === "(") {
      const value = parseSum();
      if (tokens[index++]?.value !== ")") throw new Error("unclosed parenthesis");
      return value;
    }
    throw new Error("invalid operand");
  }

  function parsePower() {
    const left = parsePrimary();
    if (tokens[index]?.value !== "**") return left;
    index += 1;
    return combine(left, parseUnary(), "**");
  }

  function parseUnary() {
    const operator = tokens[index]?.value;
    if (operator === "+" || operator === "-") {
      index += 1;
      const value = parseUnary();
      if (value.hasVariable || operator === "+") return value;
      return { ...value, value: -value.value };
    }
    return parsePower();
  }

  function parseProduct() {
    let value = parseUnary();
    while (["*", "/", "//", "%"].includes(tokens[index]?.value)) {
      const operator = tokens[index++].value;
      value = combine(value, parseUnary(), operator);
    }
    return value;
  }

  function parseSum() {
    let value = parseProduct();
    while (["+", "-"].includes(tokens[index]?.value)) {
      const operator = tokens[index++].value;
      value = combine(value, parseProduct(), operator);
    }
    return value;
  }

  const result = parseSum();
  if (index !== tokens.length) throw new Error("trailing tokens");
  return result;
}

function formatNumber(result) {
  if (Object.is(result.value, -0)) return result.isFloat ? "-0.0" : "0";
  if (result.isFloat && Number.isInteger(result.value)) return `${result.value}.0`;
  return String(result.value);
}

export function getExecutionPreview(code) {
  if (typeof code !== "string" || code.length > 500) return null;

  try {
    const source = code.trim();
    const condition = source.match(/^if\s+(.+):$/);
    if (condition) return `⚖️ 「${condition[1].trim()}」が当てはまる時だけ、下の処理が動く`;

    const printMatch = source.match(/^print\s*\((.*)\)$/);
    if (printMatch) {
      const argument = tokenize(printMatch[1].trim());
      if (!argument?.length) return null;
      const stringValue = parseStringExpression(argument);
      if (stringValue) {
        return stringValue.hasVariable
          ? "📺 変数の中身が画面に表示される"
          : `📺 画面に表示: ${stringValue.value}`;
      }
      const printedValue = evaluateArithmetic(argument);
      return printedValue.hasVariable
        ? "📺 変数の中身が画面に表示される"
        : `📺 画面に表示: ${formatNumber(printedValue)}`;
    }

    const assignment = source.match(/^([A-Za-z_]\w*)\s*=(?!=)\s*(.+)$/);
    if (!assignment) return null;

    const [, name, expression] = assignment;
    const tokens = tokenize(expression.trim());
    if (!tokens?.length) return null;

    if (tokens.length === 1 && tokens[0].type === "name" && ["True", "False"].includes(tokens[0].value)) {
      return `📦 箱[${name}] の中身: ${tokens[0].value}`;
    }

    const stringValue = parseStringExpression(tokens);
    if (stringValue) {
      return stringValue.hasVariable
        ? `📦 箱[${name}] に「${expression.trim()}」の計算結果が入る`
        : `📦 箱[${name}] の中身: ${quotePythonString(stringValue.value)}`;
    }

    const arithmetic = evaluateArithmetic(tokens);
    if (arithmetic.hasVariable) {
      return `📦 箱[${name}] に「${expression.trim()}」の計算結果が入る`;
    }
    return `📦 箱[${name}] の中身: ${formatNumber(arithmetic)}`;
  } catch {
    return null;
  }
}
