// src/components/document/DocumentCard.tsx
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Image, File, ChevronDown } from 'lucide-react';

interface DocumentCardProps {
  document: {
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
  };
}

const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'pdf':
      return <FileText className="w-6 h-6 text-red-500" />;
    case 'jpg':
      return <Image className="w-6 h-6 text-blue-500" />;
    default:
      return <File className="w-6 h-6 text-gray-500" />;
  }
};

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileIcon type={document.type} />
            <div>
              <h3 className="font-medium">{document.name}</h3>
              <p className="text-sm text-gray-500">
                {document.size} • Last modified: {document.lastModified}
              </p>
              <p className="text-sm text-gray-500">
                Source: {document.source} • {document.path}
              </p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronDown 
              className={`w-5 h-5 transform transition-transform ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
        
        {expanded && document.summaries && (
          <div className="mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Short Summary</h4>
                <p className="text-sm text-gray-600">{document.summaries.short}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Detailed Summary</h4>
                <p className="text-sm text-gray-600">{document.summaries.detailed}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentCard;