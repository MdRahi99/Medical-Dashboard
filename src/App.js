// App.js
import React, { useState } from 'react';
import './App.css';
import DocumentInfoSection from './components/DocumentInfoSection';
import SummarySection from './components/SummarySection';
import MedicationSection from './components/MedicationSection';
import DiagnosisSection from './components/DiagnosisSection';
import PDFViewer from './components/PDFViewer';

function App() {
  // State to track which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  // Handler to toggle expansion
  const handleExpand = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Left and Middle Columns */}
        {!expandedSection && (
          <>
            {/* Left Column (Document Info and Summary) */}
            <div className="flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300">
              {/* Document Information */}
              <div className="h-auto md:h-[50vh] border-b border-gray-300 bg-white">
                <DocumentInfoSection
                  isExpanded={false}
                  onExpand={() => handleExpand('documentInfo')}
                />
              </div>
              {/* Summary */}
              <div className="h-[50vh] bg-white">
                <SummarySection
                  isExpanded={false}
                  onExpand={() => handleExpand('summary')}
                />
              </div>
            </div>

            {/* Middle Column (Medication and Diagnosis) */}
            <div className="flex flex-col h-full border-b md:border-b-0 md:border-r border-gray-300">
              {/* Medication Section */}
              <div className="h-[50vh] border-b border-gray-300 bg-white">
                <MedicationSection
                  isExpanded={false}
                  onExpand={() => handleExpand('medication')}
                />
              </div>
              {/* Diagnosis Section */}
              <div className="h-[50vh] bg-white">
                <DiagnosisSection
                  isExpanded={false}
                  onExpand={() => handleExpand('diagnosis')}
                />
              </div>
            </div>
          </>
        )}

        {/* Expanded Section */}
        {expandedSection && (
          <div className="col-span-2 h-full">
            {expandedSection === 'documentInfo' && (
              <DocumentInfoSection
                isExpanded={true}
                onExpand={() => handleExpand('documentInfo')}
              />
            )}
            {expandedSection === 'summary' && (
              <SummarySection
                isExpanded={true}
                onExpand={() => handleExpand('summary')}
              />
            )}
            {expandedSection === 'medication' && (
              <MedicationSection
                isExpanded={true}
                onExpand={() => handleExpand('medication')}
              />
            )}
            {expandedSection === 'diagnosis' && (
              <DiagnosisSection
                isExpanded={true}
                onExpand={() => handleExpand('diagnosis')}
              />
            )}
          </div>
        )}

        {/* Right Column (PDF Viewer) */}
        <div className="h-full bg-white">
          <PDFViewer />
        </div>
      </div>
    </div>
  );
}

export default App;



