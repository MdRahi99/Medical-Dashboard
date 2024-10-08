import React from 'react';
import TopTitle from './shared/TopTitle';

const SummarySection = ({ minimized }) => {
  const summaryData = {
    subjektiv: "Patient berichtet über anhaltenden Husten und Müdigkeit.",
    objektiv: [
      "Vitalparameter: Blutdruck 130/85 mmHg, Puls 78 bpm.",
      "Lungenauskultation: Feuchte Rasselgeräusche beidseitig."
    ],
    assessment: "Wahrscheinliche bakterielle Pneumonie.",
    plan: [
      "Verordnung von Antibiotika (Amoxicillin 500 mg dreimal täglich).",
      "Empfehlung zur Ruhe und ausreichender Flüssigkeitszufuhr.",
      "Nachkontrolle in einer Woche."
    ]
  };

  // Function to render each section with its title and content
  const renderContent = (title, content) => (
    <div className={`bg-white border ${minimized ? 'px-4 py-2' : 'p-6'} rounded-lg`}>
      <h3 className="font-semibold text-lg mb-3 text-[#2E68A3]">{title}:</h3>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside text-sm text-gray-700">
          {content.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-700">{content}</p>
      )}
    </div>
  );

  return (
    <div>
      {!minimized ? (
        <div className="flex flex-col h-full">
          <TopTitle title="Zusammenfassung" status="Quelle" />
          <div className="flex-grow rounded-lg mx-4 mb-4 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderContent("Subjektiv", summaryData.subjektiv)}
              {renderContent("Objektiv", summaryData.objektiv)}
              {renderContent("Assessment", summaryData.assessment)}
              {renderContent("Plan", summaryData.plan)}
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full p-2 border rounded-xl h-[40vh] flex flex-col'>
          <TopTitle title="Zusammenfassung" status="Quelle" minimized={minimized} />
          <div className="flex-grow rounded-xl overflow-hidden pt-2">
            <div className="grid grid-cols-1 gap-4 h-full overflow-y-auto">
              {renderContent("Subjektiv", summaryData.subjektiv)}
              {renderContent("Objektiv", summaryData.objektiv)}
              {renderContent("Assessment", summaryData.assessment)}
              {renderContent("Plan", summaryData.plan)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummarySection;