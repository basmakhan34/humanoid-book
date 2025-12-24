import os

file_path = "book_content.txt"  # content ka text file
chunk_size = 500  # words per chunk

# 2. Read file
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# 3. Split into words
words = text.split()
chunks = []

# 4. Create chunks
for i in range(0, len(words), chunk_size):
    chunk = " ".join(words[i:i+chunk_size])
    chunks.append(chunk)

# 5. Save chunks to separate files
os.makedirs("chunks", exist_ok=True)
for idx, chunk in enumerate(chunks):
    with open(f"chunks/chunk_{idx+1}.txt", "w", encoding="utf-8") as f:
        f.write(chunk)

print(f"{len(chunks)} chunks created successfully!")
