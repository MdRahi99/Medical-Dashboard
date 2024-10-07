// components/PDFViewer.js
import React from 'react';

const PDFViewer = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-primary">PDF-Viewer</h2>
      <div className="flex-grow border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Platzhalter für PDF-Inhalt.</p>
      </div>
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
        PDF hochladen
      </button>
    </div>
  );
};

export default PDFViewer;
