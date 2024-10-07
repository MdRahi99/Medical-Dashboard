// components/DiagnosisSection.js
import React from 'react';
import TopTitle from './shared/TopTitle';

const DiagnosisSection = ({ isExpanded, onExpand }) => {
  const diagnoses = [
    { icd10: 'I10', name: 'Essentielle (primäre) Hypertonie' },
    { icd10: 'E11', name: 'Nicht-insulinabhängiger Diabetes mellitus' },
    { icd10: 'J45', name: 'Asthma bronchiale' },
    { icd10: 'M54.5', name: 'Kreuzschmerz' },
    { icd10: 'F41.1', name: 'Generalisierte Angststörung' },
    // 6 zusätzliche Diagnosen hinzufügen
    { icd10: 'E66.0', name: 'Adipositas durch übermäßige Kalorienzufuhr' },
    { icd10: 'G43.0', name: 'Migräne ohne Aura' },
    { icd10: 'I25.1', name: 'Atherosklerotische Herzkrankheit' },
    { icd10: 'K21.0', name: 'Gastroösophageale Refluxkrankheit mit Ösophagitis' },
    { icd10: 'N39.0', name: 'Harnwegsinfektion, nicht näher bezeichnet' },
    { icd10: 'J06.9', name: 'Akute Infektion der oberen Atemwege, nicht näher bezeichnet' },
  ];

  return (
    <div className="h-full flex flex-col box-border">
      {/* Header mit Überschrift und Buttons */}
      <TopTitle title="Diagnose" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
      {/* Tabelle */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg flex-grow overflow-y-auto mx-4 mb-4">
        <table className="min-w-full bg-white text-xs relative">
          <thead className="sticky top-0 bg-white">
            <tr className="divide-y divide-gray-300">
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider">
                ICD10
              </th>
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider w-1/2">
                Name
              </th>
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {diagnoses.map((diagnosis, index) => {
              // Hintergrundfarbe und Buttontext basierend auf dem Index festlegen
              let rowBgColor = '';
              let buttonText = 'Hinzufügen';
              let showButton = true;
              let buttonColor = 'bg-blue-500 hover:bg-blue-700';

              if (index === 2) {
                // 3. Diagnose
                rowBgColor = 'bg-yellow-100';
                buttonText = 'Ändern';
                buttonColor = 'bg-yellow-500 hover:bg-yellow-700';
              } else if (index === 3) {
                // 4. Diagnose
                rowBgColor = 'bg-red-100';
                buttonText = 'Löschen';
                buttonColor = 'bg-red-500 hover:bg-red-700';
              } else if (index >= 4) {
                // Ab der 5. Diagnose
                rowBgColor = 'bg-green-100';
                showButton = false;
              }

              return (
                <tr key={index} className={`${rowBgColor}`}>
                  <td className="py-2 px-4">{diagnosis.icd10}</td>
                  <td className="py-2 px-4">{diagnosis.name}</td>
                  <td className="py-2 px-4">
                    {showButton && (
                      <button
                        className={`${buttonColor} text-white px-3 py-1 rounded w-full`}
                      >
                        {buttonText}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisSection;









