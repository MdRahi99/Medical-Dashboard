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
      <div className={"font-poppins bg-gray-100 flex flex-col justify-between gap-2 rounded-lg flex-grow mx-4 mb-4 p-1"}>
        <div className='bg-white flex flex-col justify-between p-2 gap-2 rounded-lg h-full'>
          {data.map((item, index) => (
            <div key={index} className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg">
              <span className="font-medium">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentInfoSection;









