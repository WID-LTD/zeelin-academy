import fitz

paths = [
    r'C:\Users\DELL\Downloads\project\zeelin\Feedback Mock-up for the Home page.pdf',
    r'C:\Users\DELL\Downloads\project\zeelin\Feedback Mock -up for the About page.pdf'
]

for path in paths:
    doc = fitz.open(path)
    title = doc.metadata.get("title", path)
    print('=' * 60)
    print(title)
    print('=' * 60)
    print(f'Pages: {len(doc)}')
    for i, page in enumerate(doc):
        text = page.get_text()
        if text.strip():
            print(f'--- Page {i+1} ---')
            print(text.strip()[:2000])
    doc.close()
