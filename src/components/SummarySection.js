import React from 'react';
import TopTitle from './shared/TopTitle';

const SummarySection = ({ isExpanded, onExpand }) => {
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

  const renderContent = (title, content) => (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="font-bold mb-2">{title}:</h3>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside text-sm">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">{content}</p>
      )}
    </div>
  );

  return (
    <div className={`${isExpanded ? 'h-auto md:h-[100vh] overflow-y-auto' : 'h-full'} flex flex-col`}>
      <TopTitle
        title="Zusammenfassung"
        status="Quelle"
        onExpand={onExpand}
        isExpanded={isExpanded}
      />
      <div className="flex-grow bg-gray-50 p-3 rounded-lg mx-4 mb-4 overflow-auto">
        <div className={`${isExpanded ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1 gap-4'} grid`}>
          {renderContent("Subjektiv", summaryData.subjektiv)}
          {renderContent("Objektiv", summaryData.objektiv)}
          {renderContent("Assessment", summaryData.assessment)}
          {renderContent("Plan", summaryData.plan)}
        </div>
      </div>
    </div>
  );
};

export default SummarySection;