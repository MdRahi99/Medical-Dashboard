// components/DocumentInfoSection.js
import React from 'react';
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';

const DocumentInfoSection = ({ isExpanded, onExpand }) => {
  const data = [
    { label: 'Name', value: 'Max Mustermann' },
    { label: 'Geburtsdatum', value: '15. März 1985' },
    { label: 'Krankenhaus', value: 'Krankenhaus Berlin' },
    { label: 'Zuweisername', value: 'Dr. Hans Meier' },
    { label: 'Zuweiser E-Mail', value: 'hans.meier@beispiel.de' },
    { label: 'Zuweiser Telefon', value: '+49 30 12345678' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header mit Überschrift und Buttons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold text-secondary">
            Dokumentinformationen
          </h3>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
            onClick={() => console.log('Quelle Button geklickt')}
          >
            Quelle
          </button>
        </div>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={onExpand}
        >
          {isExpanded ? (
            <ArrowsPointingInIcon className="h-5 w-5" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* Inhalt */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg flex-grow mx-4 mb-4 p-4">
        <div className="flex flex-col h-full justify-between">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-semibold">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentInfoSection;









