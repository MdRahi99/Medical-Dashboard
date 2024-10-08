import React from 'react';
import TopTitle from './shared/TopTitle';

const DocumentInfoSection = () => {
  const data = [
    { label: 'Name', value: 'Max Mustermann' },
    { label: 'Geburtsdatum', value: '15. März 1985' },
    { label: 'Krankenhaus', value: 'Krankenhaus Berlin' },
    { label: 'Zuweisername', value: 'Dr. Hans Meier' },
    { label: 'Zuweiser E-Mail', value: 'hans.meier@beispiel.de' },
    { label: 'Zuweiser Telefon', value: '+49 30 12345678' },
  ];

  return (
    <div>
      <TopTitle title="Dokumentinformationen" status="Quelle" />
      <div className="md:p-8 p-0 md:border rounded-xl flex flex-col items-center gap-8 mx-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3 border md:border-none p-6 rounded-xl w-full md:w-auto md:p-0">
          <div className="w-24 h-24 rounded-full bg-[#a3ccf6] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Max Mustermann</h2>
          <span className="text-gray-700">Krankenhaus Berlin</span>
        </div>

        {/* Document Information */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-[#eff5fb] p-4 rounded-xl">
              <span className="font-semibold text-gray-700">{item.label}</span>
              <span className="">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentInfoSection;
