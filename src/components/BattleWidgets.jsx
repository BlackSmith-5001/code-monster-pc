import { useState } from "react";
import { RARITY_COLORS } from "../data";

const RARITY_GLOW = {
  common: "rgba(148, 163, 184, 0.28)",
  uncommon: "rgba(52, 211, 153, 0.32)",
  rare: "rgba(96, 165, 250, 0.42)",
  epic: "rgba(251, 191, 36, 0.5)",
};

export function MonsterPortrait({ enemy, flash }) {
  const [imageError, setImageError] = useState(false);

  const showImage = enemy.image && !imageError;
  const rarityColor = RARITY_COLORS[enemy.rarity] || "#94a3b8";

  return (
    <div
      key={`${enemy.id}-${enemy.maxHp}`}
      className={[
        "monster-portrait",
        `monster-portrait--${enemy.rarity}`,
        flash === "ng" ? "monster-portrait--hit" : "",
        flash === "ok" ? "monster-portrait--strike" : "",
        flash === "critical" ? "monster-portrait--critical" : "",
      ].filter(Boolean).join(" ")}
      style={{
        "--rarity-color": rarityColor,
        "--rarity-glow": RARITY_GLOW[enemy.rarity] || RARITY_GLOW.common,
        width: "min(340px, 100%)",
        maxWidth: "100%",
        margin: "8px auto",
        boxSizing: "border-box",
      }}
    >
      <div
        className="monster-portrait__imageBox"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          maxHeight: 340,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {showImage ? (
          <img
            className="monster-portrait__image"
            src={enemy.image}
            alt={enemy.name}
            onError={() => setImageError(true)}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              filter:
                flash === "critical"
                  ? "drop-shadow(0 0 12px #fbbf24)"
                  : "drop-shadow(0 0 8px rgba(56,189,248,0.35))",
            }}
          />
        ) : (
          <div className="monster-portrait__fallback">{enemy.sprite}</div>
        )}
      </div>
    </div>
  );
}

export function StatusCard({ label, value, color }) {
  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #334155",
        borderRadius: 10,
        padding: 12,
      }}
    >
      <div style={{ fontSize: 12, color: "#94a3b8" }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: "bold", color }}>{value}</div>
    </div>
  );
}

export function Gauge({ title, value, text, color, variant = "default" }) {
  return (
    <div className={`gauge gauge--${variant}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "#cbd5e1",
          marginBottom: 5,
        }}
      >
        <span>{title}</span>
        <span>{text}</span>
      </div>

      <div className="gauge__track">
        <div
          className="gauge__fill"
          style={{
            width: `${Math.max(0, Math.min(100, value))}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}
