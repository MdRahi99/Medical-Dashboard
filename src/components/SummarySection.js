// components/SummarySection.js
import React from 'react';
import TopTitle from './shared/TopTitle';

const SummarySection = ({ isExpanded, onExpand }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header mit Überschrift und Buttons */}
      <TopTitle title="Zusammenfassung" status="Quelle" onExpand={onExpand} isExpanded={isExpanded} />
      {/* Textarea */}
      <div className="flex-grow mx-4 mb-4">
        <textarea
          className="w-full h-full p-3 border border-gray-300 rounded-lg resize-none text-xs shadow-lg"
          defaultValue={`**Subjektiv:**
Patient berichtet über anhaltenden Husten und Müdigkeit.

**Objektiv:**
- Vitalparameter: Blutdruck 130/85 mmHg, Puls 78 bpm.
- Lungenauskultation: Feuchte Rasselgeräusche beidseitig.

**Assessment:**
Wahrscheinliche bakterielle Pneumonie.

**Plan:**
- Verordnung von Antibiotika (Amoxicillin 500 mg dreimal täglich).
- Empfehlung zur Ruhe und ausreichender Flüssigkeitszufuhr.
- Nachkontrolle in einer Woche.`}
        />
      </div>
    </div>
  );
};

export default SummarySection;



