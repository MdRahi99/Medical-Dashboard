// components/MedicationSection.js
import React from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

const MedicationSection = ({ isExpanded, onExpand }) => {
  const medications = [
    // Alle Medikamente hier einfügen
    { name: 'CLORAZEPATE Zentiva Filmtabl 20 mg 20 Stk', schedule: '1-1-0-1' },
    { name: 'DAFALGAN Tabl 500 mg (neu) 30 Stk', schedule: '1-0-1-0' },
    { name: 'IBUPROFEN Mylan Filmtabl 600 mg 100 Stk', schedule: '0-0-0-1' },
    { name: 'PARACETAMOL Sandoz Filmtabl 500 mg 20 Stk', schedule: '1-1-1-1' },
    { name: 'AMOXICILLIN Mepha 500 mg 30 Kps', schedule: '1-0-1-0' },
    { name: 'DIAZEPAM Desitin Rectiole 5 mg 5 ml 10 Stk', schedule: '0-0-1-0' },
    { name: 'NOVALGIN Tropfen 500 mg/ml 20 ml', schedule: '1-1-1-1' },
    { name: 'ASPIRIN Cardio Filmtabl 100 mg 28 Stk', schedule: '1-0-0-0' },
    // Weitere Medikamente hinzufügen
  ];

  return (
    <div className="h-full flex flex-col box-border">
      {/* Header mit Überschrift und Buttons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold text-secondary">Medikation</h3>
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
      {/* Tabelle */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg flex-grow overflow-y-auto mx-4 mb-4">
        <table className="min-w-full bg-white text-xs relative">
          <thead className="sticky top-0 bg-white">
            <tr className="divide-y divide-gray-300">
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider w-1/2">
                Name
              </th>
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider">
                Schema
              </th>
              <th className="py-2 px-4 text-left font-medium text-gray-600 uppercase tracking-wider">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {medications.map((medication, index) => {
              // Hintergrundfarbe und Buttontext basierend auf dem Index festlegen
              let rowBgColor = '';
              let buttonText = 'Hinzufügen';
              let showButton = true;
              let buttonColor = 'bg-blue-500 hover:bg-blue-700';

              if (index === 2) {
                // 3. Medikament
                rowBgColor = 'bg-yellow-100';
                buttonText = 'Ändern';
                buttonColor = 'bg-yellow-500 hover:bg-yellow-700';
              } else if (index === 3) {
                // 4. Medikament
                rowBgColor = 'bg-red-100';
                buttonText = 'Löschen';
                buttonColor = 'bg-red-500 hover:bg-red-700';
              } else if (index >= 4) {
                // Ab dem 5. Medikament
                rowBgColor = 'bg-green-100';
                showButton = false;
              }

              return (
                <tr key={index} className={`${rowBgColor}`}>
                  <td className="py-2 px-4">{medication.name}</td>
                  <td className="py-2 px-4">{medication.schedule}</td>
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

export default MedicationSection;










