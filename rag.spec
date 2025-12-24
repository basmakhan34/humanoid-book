name: humanoid-book-rag

description: >
  Build a fully automated RAG chatbot inside a DocuSaurus book.
  The chatbot must read book content automatically and answer
  questions only from the book.

inputs:
  docs_path:
    description: Path to DocuSaurus docs folder
    default: docs/

outputs:
  rag_api: rag/rag_server.py
  rag_builder: rag/build_rag.py
  rag_prompt: rag/prompts/rag.prompt
  ui_component: src/components/AskBook.jsx

steps:

  - name: Build RAG Index
    run: |
      Create a Python script that:
      - Reads all markdown files from docs_path
      - Splits content into semantic chunks
      - Uses sentence-transformers
      - Stores embeddings in FAISS
      - Saves chunks.pkl and faiss.index
      - Auto rebuilds if docs change

  - name: Create RAG Prompt
    run: |
      Create a reusable prompt that:
      - Answers ONLY from book context
      - If answer not found → say "Not in book"
      - Explains errors in bullet points
      - Uses simple language

  - name: Create Gemini RAG API
    run: |
      Create a local Python API that:
      - Loads FAISS index
      - Retrieves relevant chunks
      - Sends prompt + context to Gemini
      - Returns clean markdown answer

  - name: Create DocuSaurus Chat UI
    run: |
      Create a React component that:
      - Appears in DocuSaurus sidebar
      - Has chat input + response area
      - Calls local RAG API
      - Shows loading + error states

  - name: Integration
    run: |
      Explain how to:
      - Import component into DocuSaurus
      - Add "Ask the Book 🤖" link
      - Run everything locally
