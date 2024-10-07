import React from 'react';
import { DocumentArrowUpIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

const PDFViewer = () => {
  return (
    <div className="p-6 h-full flex flex-col bg-gray-50 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <DocumentMagnifyingGlassIcon className="w-8 h-8 mr-2" />
        PDF-Viewer
      </h2>
      <div className="flex-grow border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white p-10">
        <div className="text-center">
          <DocumentMagnifyingGlassIcon className="w-16 h-16 mx-auto text-gray-400" />
          <p className="mt-2 text-gray-500">Platzhalter für PDF-Inhalt.</p>
        </div>
      </div>
      <button className="mt-6 bg-[#2E68A3] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center">
        <DocumentArrowUpIcon className="w-5 h-5 mr-2" />
        PDF hochladen
      </button>
    </div>
  );
};

export default PDFViewer;