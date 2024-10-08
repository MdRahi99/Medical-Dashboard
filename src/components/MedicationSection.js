import React from 'react';
import TopTitle from './shared/TopTitle';

const MedicationSection = ({ minimized }) => {
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

  const renderExpandedView = () => (
    <div className="h-full flex flex-col box-border">
      <TopTitle title="Medikation" status="Quelle" />
      <div className="rounded-lg md:border flex-grow overflow-x-auto mx-4 mb-4 md:p-3">
        <div className="min-w-[640px]">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#d6e8fb]">
                <th className="p-3 text-left text-sm font-semibold uppercase rounded-l-lg">Name</th>
                <th className="p-3 text-left text-sm font-semibold uppercase">Schema</th>
                <th className="p-3 text-end pr-[3rem] text-sm font-semibold uppercase rounded-r-lg">Aktion</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((medication, index) => (
                <tr key={index} className="bg-[#EFF5FB] rounded-lg">
                  <td className="px-3 py-2 text-sm rounded-l-lg">{medication.name}</td>
                  <td className="px-3 py-2 text-sm">{medication.schedule}</td>
                  <td className="px-3 py-2 text-sm flex justify-end rounded-r-lg">
                    <button
                      className={`${index === 2
                          ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-400 hover:text-white'
                          : index === 3
                            ? 'bg-red-200 text-red-800 hover:bg-red-400 hover:text-white'
                            : index >= 4
                              ? 'bg-green-200 text-green-800 hover:bg-green-400 hover:text-white'
                              : 'bg-blue-200 text-blue-800 hover:bg-blue-400 hover:text-white'
                        } w-28 text-xs py-2 px-4 rounded-md`}
                    >
                      {index === 2 ? 'Ändern' : index === 3 ? 'Löschen' : index >= 4 ? 'Ansehen' : 'Hinzufügen'}
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

  const renderMinimizedView = () => (
    <div className='w-full p-2 border rounded-xl h-[40vh] flex flex-col'>
      <TopTitle title="Medikation" status="Quelle" minimized={minimized} />
      <div className="flex-grow overflow-y-auto mt-2">
        <ul className="space-y-2">
          {medications.map((medication, index) => (
            <li key={index} className="bg-[#EFF5FB] rounded-lg p-4 text-sm flex flex-col gap-4 md:flex-row justify-between md:items-center">
              <div className="flex-grow">
                <div className="font-semibold text-sm truncate pb-2">{`${medication?.name?.length > 30 ? `${medication?.name?.slice(0, 30)}...` : medication?.name}`}</div>
                <div className="text-gray-600">Schema: {medication.schedule}</div>
              </div>
              <div className='w-full flex items-end justify-end'>
                <button
                  className={`${index === 2
                      ? 'bg-yellow-200 text-yellow-800'
                      : index === 3
                        ? 'bg-red-200 text-red-800'
                        : index >= 4
                          ? 'bg-green-200 text-green-800'
                          : 'bg-blue-200 text-blue-800'
                    } text-xs py-2 px-3 w-24 rounded-md whitespace-nowrap`}
                >
                  {index === 2 ? 'Ändern' : index === 3 ? 'Löschen' : index >= 4 ? 'Ansehen' : 'Hinzufügen'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {!minimized ? renderExpandedView() : renderMinimizedView()}
    </div>
  );
};

export default MedicationSection;