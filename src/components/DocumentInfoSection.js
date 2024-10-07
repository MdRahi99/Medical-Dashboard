// components/DocumentInfoSection.js
import React from 'react';
import TopTitle from './shared/TopTitle';

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
      <TopTitle title="Dokumentinformationen" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
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









