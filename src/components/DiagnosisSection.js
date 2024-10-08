import React from 'react';
import TopTitle from './shared/TopTitle';

const DiagnosisSection = () => {
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
    <div className="h-full flex flex-col box-border">
      <TopTitle title="Diagnose" status="Quelle" />
      {/* Table Container */}
      <div className="rounded-lg md:border flex-grow overflow-x-auto mx-4 mb-4 md:p-3">
        <div className="min-w-[640px]"> {/* Minimum width container */}
          <table className="w-full border-separate border-spacing-y-3">
            {/* Table Head */}
            <thead>
              <tr className="bg-[#d6e8fb]">
                <th className="p-3 text-left text-sm font-semibold uppercase rounded-l-lg">ICD10</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Name</th>
                <th className="p-3 text-end pr-[3rem] text-sm font-semibold uppercase rounded-r-lg">Aktion</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {diagnoses.map((diagnosis, index) => (
                <tr key={index} className="bg-[#EFF5FB] rounded-lg">
                  <td className="px-3 py-2 text-sm rounded-l-lg">{diagnosis.icd10}</td>
                  <td className="px-3 py-2 text-sm">{diagnosis.name}</td>
                  <td className="px-3 py-2 text-sm flex justify-end rounded-r-lg">
                    {/* Different action button colors */}
                    <button
                      className={`${
                        index === 2
                          ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-400 hover:text-white'
                          : index === 3
                          ? 'bg-red-200 text-red-800 hover:bg-red-400 hover:text-white'
                          : index >= 4
                          ? 'bg-green-200 text-green-800 hover:bg-green-400 hover:text-white'
                          : 'bg-blue-200 text-blue-800 hover:bg-blue-400 hover:text-white'
                      } w-28 text-xs py-2 px-4 rounded-md`}
                    >
                      {index === 2
                        ? 'Ändern'
                        : index === 3
                        ? 'Löschen'
                        : index >= 4
                        ? 'Ansehen'
                        : 'Hinzufügen'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisSection;
