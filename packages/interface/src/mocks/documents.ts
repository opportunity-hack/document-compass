// src/mocks/documents.ts
export const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Q4 Financial Report 2023.pdf',
    type: 'pdf',
    size: '2.4 MB',
    lastModified: '2024-02-15',
    source: 'Google Drive',
    path: '/Financial Reports/2023/',
    summaries: {
      short: 'Q4 2023 financial report shows 15% revenue growth, $2.3M in new recurring revenue.',
      detailed: 'Fourth quarter financial results exceeded expectations with total revenue of $12.3M representing 15% YoY growth. Key highlights include $2.3M in new recurring revenue.',
      form: {
        revenue: '$12.3M',
        growth: '15% YoY',
        keyMetrics: ['New recurring revenue: $2.3M', 'Gross margin: 72%'],
      }
    }
  },
  {
    id: '2',
    name: 'Product Roadmap 2024.ppt',
    type: 'ppt',
    size: '3.1 MB',
    lastModified: '2024-02-10',
    source: 'Dropbox',
    path: '/Product/Roadmaps/',
    summaries: {
      short: '2024 product strategy and feature rollout timeline.',
      detailed: 'Comprehensive product roadmap outlining key features, market strategy, and development timeline for 2024.',
    }
  }
];
