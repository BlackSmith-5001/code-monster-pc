from pathlib import Path
import shutil

from PIL import Image


MONSTER_DIR = Path(__file__).resolve().parent / "public" / "images" / "monsters"
BACKUP_DIR = MONSTER_DIR / "originals"
BLACK_THRESHOLD = 20


def remove_black_background(image_path: Path) -> None:
    backup_path = BACKUP_DIR / image_path.name
    if not backup_path.exists():
        shutil.copy2(image_path, backup_path)

    with Image.open(image_path) as image:
        rgba = image.convert("RGBA")
        pixels = []

        source_pixels = (
            rgba.get_flattened_data()
            if hasattr(rgba, "get_flattened_data")
            else rgba.getdata()
        )

        for red, green, blue, alpha in source_pixels:
            if red <= BLACK_THRESHOLD and green <= BLACK_THRESHOLD and blue <= BLACK_THRESHOLD:
                pixels.append((red, green, blue, 0))
            else:
                pixels.append((red, green, blue, alpha))

        rgba.putdata(pixels)
        rgba.save(image_path, "PNG")


def main() -> None:
    if not MONSTER_DIR.exists():
        raise FileNotFoundError(f"Monster directory not found: {MONSTER_DIR}")

    BACKUP_DIR.mkdir(exist_ok=True)
    png_files = sorted(
        path
        for path in MONSTER_DIR.glob("*.png")
        if path.is_file() and path.parent != BACKUP_DIR
    )

    for image_path in png_files:
        remove_black_background(image_path)

    print(f"Processed PNG files: {len(png_files)}")
    print(f"Backup directory: {BACKUP_DIR}")


if __name__ == "__main__":
    main()
