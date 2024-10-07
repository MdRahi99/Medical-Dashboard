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
    <div className={`${isExpanded ? 'h-auto md:h-[100vh] overflow-y-auto' : 'h-full'} flex flex-col`}>
      {/* Header mit Überschrift und Buttons */}
      <TopTitle title="Dokumentinformationen" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
      {/* Inhalt */}
      <div className={"font-poppins bg-gray-50 flex flex-col justify-between gap-2 rounded-lg flex-grow mx-4 mb-4 p-3 capitalize"}>
        {
          !isExpanded ?
            <div className='flex flex-col justify-between gap-2 rounded-lg h-full'>
              {data.map((item, index) => (
                <div key={index} className="flex justify-between bg-white px-4 py-2 rounded-lg">
                  <span className="font-medium">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
            :
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='bg-white p-4 md:p-8 rounded-lg w-full flex flex-col gap-8'>
                {data.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex md:text-lg justify-between">
                    <span className="font-medium">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className='bg-white p-4 md:p-8 rounded-lg w-full flex flex-col gap-8'>
                {data.slice(3, 6).map((item, index) => (
                  <div key={index} className="flex md:text-lg justify-between">
                    <span className="font-medium">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default DocumentInfoSection;









