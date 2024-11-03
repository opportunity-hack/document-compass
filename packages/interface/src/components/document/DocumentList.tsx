// src/components/document/DocumentList.tsx
"use client";

import DocumentCard from './DocumentCard';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  lastModified: string;
  source: string;
  path: string;
  summaries?: {
    short: string;
    detailed: string;
    form?: Record<string, any>;
  };
}

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
    </div>
  );
};

export default DocumentList;