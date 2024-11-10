from fastapi import FastAPI
from sentence_transformers import SentenceTransformer

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


class PDFProcessor:
    def extract_text(self, file_path):
        pass

class PPTProcessor:
    def extract_text(self, file_path):
        pass

class ImageProcessor:
    def extract_text(self, file_path):
        pass


class DocumentVectorizer:
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.file_processors = {
            'pdf': PDFProcessor(),
            'ppt': PPTProcessor(),
            'jpg': ImageProcessor(),
        }
