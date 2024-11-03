// src/app/page.tsx
"use client";

import { Search, CloudSun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DocumentList from '../components/document/DocumentList';
import { mockDocuments } from '../mocks/documents';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Document Compass</h1>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <CloudSun className="w-4 h-4" />
              <span>Sync Google Drive</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <CloudSun className="w-4 h-4" />
              <span>Sync Dropbox</span>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <Input
            placeholder="Search documents..."
            className="pl-10"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <DocumentList documents={mockDocuments} />
    </main>
  );
}