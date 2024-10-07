import React from 'react';
import TopTitle from './shared/TopTitle';

const DiagnosisSection = ({ isExpanded, onExpand }) => {
  const diagnoses = [
    { icd10: 'I10', name: 'Essentielle (primäre) Hypertonie' },
    { icd10: 'E11', name: 'Nicht-insulinabhängiger Diabetes mellitus' },
    { icd10: 'J45', name: 'Asthma bronchiale' },
    { icd10: 'M54.5', name: 'Kreuzschmerz' },
    { icd10: 'F41.1', name: 'Generalisierte Angststörung' },
    { icd10: 'E66.0', name: 'Adipositas durch übermäßige Kalorienzufuhr' },
    { icd10: 'G43.0', name: 'Migräne ohne Aura' },
    { icd10: 'I25.1', name: 'Atherosklerotische Herzkrankheit' },
    { icd10: 'K21.0', name: 'Gastroösophageale Refluxkrankheit mit Ösophagitis' },
    { icd10: 'N39.0', name: 'Harnwegsinfektion, nicht näher bezeichnet' },
    { icd10: 'J06.9', name: 'Akute Infektion der oberen Atemwege, nicht näher bezeichnet' },
  ];

  return (
    <div className={`${isExpanded ? 'h-auto md:h-[100vh] overflow-y-auto' : 'h-full'} flex flex-col box-border no-scrollbar`}>
      <TopTitle title="Diagnose" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
      <div className="bg-gray-50 rounded-lg flex-grow overflow-y-auto mx-4 mb-4 p-3">
        <div className="grid grid-cols-1 gap-3">
          {diagnoses.map((diagnosis, index) => {
            let cardBgColor = 'bg-white';
            let buttonText = 'Hinzufügen';
            let showButton = true;
            let buttonColor = 'bg-blue-500 hover:bg-blue-700';

            if (index === 2) {
              cardBgColor = 'bg-yellow-100';
              buttonText = 'Ändern';
              buttonColor = 'bg-yellow-500 hover:bg-yellow-700';
            } else if (index === 3) {
              cardBgColor = 'bg-red-100';
              buttonText = 'Löschen';
              buttonColor = 'bg-red-500 hover:bg-red-700';
            } else if (index >= 4) {
              cardBgColor = 'bg-green-100';
              showButton = false;
            }

            return (
              <div key={index} className={`${cardBgColor} rounded-lg shadow-sm overflow-hidden font-roboto`}>
                <div className="p-4 flex flex-col">
                  <div className='flex flex-col justify-start'>
                    <h3 className="font-semibold mb-2 text-sm">{diagnosis.name}</h3>
                    <p className="text-gray-600 mb-4 text-xs">ICD10: {diagnosis.icd10}</p>
                  </div>
                  <div className='flex items-end justify-end'>
                    {showButton && (
                      <button
                        className={`${buttonColor} text-white p-1.5 rounded-3xl w-24 text-xs`}
                      >
                        {buttonText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisSection;