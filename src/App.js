import React from 'react';
import './App.css';
import DocumentInfoSection from './components/DocumentInfoSection';
import SummarySection from './components/SummarySection';
import MedicationSection from './components/MedicationSection';
import DiagnosisSection from './components/DiagnosisSection';
import PDFViewer from './components/PDFViewer';
import DynamicTab from './components/shared/DynamicTab';
import OverviewSection from './components/OverviewSection';

function App() {
  const sections = [
    {
      name: 'overview',
      label: 'Overview',
      component: <OverviewSection />,
    },
    {
      name: 'dokumentinformationen',
      label: 'Dokumentinformationen',
      component: <DocumentInfoSection />,
    },
    {
      name: 'zusammenfassung',
      label: 'Zusammenfassung',
      component: <SummarySection />,
    },
    {
      name: 'medikation',
      label: 'Medikation',
      component: <MedicationSection />,
    },
    {
      name: 'diagnose',
      label: 'Diagnose',
      component: <DiagnosisSection />,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 h-full md:h-[100vh] lg:space-x-4 p-2 md:p-4 bg-gray-50">
      {/* Left and Middle Columns */}
      <div className="h-auto md:h-[95vh] overflow-y-auto lg:w-2/3 w-full bg-white py-4 rounded-xl">
        <DynamicTab sections={sections} />
      </div>

      {/* Right Column (PDF Viewer) */}
      <div className="h-auto md:h-[95vh] bg-white rounded-xl lg:w-1/3 w-full">
        <PDFViewer />
      </div>
    </div>
  );
}

export default App;
