import React from 'react';
import TopTitle from './shared/TopTitle';

const MedicationSection = ({ isExpanded, onExpand }) => {
  const medications = [
    { name: 'CLORAZEPATE Zentiva Filmtabl 20 mg 20 Stk', schedule: '1-1-0-1' },
    { name: 'DAFALGAN Tabl 500 mg (neu) 30 Stk', schedule: '1-0-1-0' },
    { name: 'IBUPROFEN Mylan Filmtabl 600 mg 100 Stk', schedule: '0-0-0-1' },
    { name: 'PARACETAMOL Sandoz Filmtabl 500 mg 20 Stk', schedule: '1-1-1-1' },
    { name: 'AMOXICILLIN Mepha 500 mg 30 Kps', schedule: '1-0-1-0' },
    { name: 'DIAZEPAM Desitin Rectiole 5 mg 5 ml 10 Stk', schedule: '0-0-1-0' },
    { name: 'NOVALGIN Tropfen 500 mg/ml 20 ml', schedule: '1-1-1-1' },
    { name: 'ASPIRIN Cardio Filmtabl 100 mg 28 Stk', schedule: '1-0-0-0' },
  ];

  return (
    <div className={`${isExpanded ? 'h-auto md:h-[100vh] overflow-y-auto' : 'h-full'} flex flex-col box-border no-scrollbar`}>
      <TopTitle title="Medikation" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
      <div className="bg-gray-50 rounded-lg flex-grow overflow-y-auto mx-4 mb-4 p-3">
        <div className={`${isExpanded ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1 gap-3'} grid`}>
          {medications.map((medication, index) => {
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
                    <h3 className="font-semibold mb-2 text-sm">{medication.name}</h3>
                    <p className="text-gray-600 mb-4 text-xs">Schema: {medication.schedule}</p>
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

export default MedicationSection;