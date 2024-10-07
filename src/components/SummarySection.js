// components/SummarySection.js
import React from 'react';
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';

const SummarySection = ({ isExpanded, onExpand }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header mit Überschrift und Buttons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold text-secondary">
            Zusammenfassung
          </h3>
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



