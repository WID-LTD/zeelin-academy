from PIL import Image
import glob
import os
from collections import deque

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'public')
STRICT = 235
BG_TOL = 30

files = sorted(glob.glob(os.path.join(PUBLIC_DIR, 'exam_focus_*.png')))
print(f'Found {len(files)} files')

for fp in files:
    name = os.path.basename(fp)
    img = Image.open(fp).convert('RGBA')
    w, h = img.size
    pixels = img.load()

    # Mark rows/cols with "definitely book" pixels (min channel < STRICT)
    rows_with_book = [False] * h
    cols_with_book = [False] * w
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            m = min(r, g, b)
            if m < STRICT:
                rows_with_book[y] = True
                cols_with_book[x] = True

    top = next((y for y in range(h) if rows_with_book[y]), 0)
    bottom = next((y for y in reversed(range(h)) if rows_with_book[y]), h - 1)
    left = next((x for x in range(w) if cols_with_book[x]), 0)
    right = next((x for x in reversed(range(w)) if cols_with_book[x]), w - 1)

    # Expand by a small margin
    margin = 5
    top = max(0, top - margin)
    bottom = min(h, bottom + margin)
    left = max(0, left - margin)
    right = min(w, right + margin)

    def is_bg(x, y):
        r, g, b, a = pixels[x, y]
        return (255 - r) <= BG_TOL and (255 - g) <= BG_TOL and (255 - b) <= BG_TOL

    visited = [[False] * h for _ in range(w)]
    q = deque()
    in_book = lambda x, y: left <= x < right and top <= y < bottom

    for x in range(w):
        for y in [0, h - 1]:
            if not visited[x][y] and not in_book(x, y):
                visited[x][y] = True
                if is_bg(x, y):
                    pixels[x, y] = (pixels[x, y][0], pixels[x, y][1], pixels[x, y][2], 0)
                    q.append((x, y))
    for y in range(h):
        for x in [0, w - 1]:
            if not visited[x][y] and not in_book(x, y):
                visited[x][y] = True
                if is_bg(x, y):
                    pixels[x, y] = (pixels[x, y][0], pixels[x, y][1], pixels[x, y][2], 0)
                    q.append((x, y))

    while q:
        cx, cy = q.popleft()
        for nx, ny in [(cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)]:
            if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny] and not in_book(nx, ny):
                visited[nx][ny] = True
                if is_bg(nx, ny):
                    pixels[nx, ny] = (pixels[nx, ny][0], pixels[nx, ny][1], pixels[nx, ny][2], 0)
                    q.append((nx, ny))

    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(fp, 'PNG')
    final_w, final_h = img.size
    print(f'  {name}: {w}x{h} -> {final_w}x{final_h}')

print('Done')
