from PIL import Image
import shutil

src = "public/images/title-logo.png"
backup = "public/images/title-logo-original.png"

shutil.copy2(src, backup)
print(f"バックアップ完了: {backup}")

img = Image.open(src).convert("RGBA")
data = img.getdata()
new_data = []
for r, g, b, a in data:
    if r < 15 and g < 15 and b < 15:
        new_data.append((0, 0, 0, 0))
    else:
        new_data.append((r, g, b, a))
img.putdata(new_data)
img.save(src)
print("title-logo.png の黒背景を透過処理しました！")
