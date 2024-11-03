// src/types/document.ts
interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'ppt' | 'jpg';
  size: string;
  lastModified: string;
  source: 'Google Drive' | 'Dropbox' | 'Local';
  path: string;
  similarity?: number;
  summaries?: {
    short: string;
    detailed: string;
    form?: Record<string, any>;
  };
}