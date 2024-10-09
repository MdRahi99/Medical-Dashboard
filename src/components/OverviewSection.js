import React from 'react';
import DocumentInfoSection from './DocumentInfoSection';
import SummarySection from './SummarySection';
import MedicationSection from './MedicationSection';
import DiagnosisSection from './DiagnosisSection';

const OverviewSection = () => {

    const sections = [
        {
            name: 'dokumentinformationen',
            label: 'Dokumentinformationen',
            component: <DocumentInfoSection minimized={true} />,
        },
        {
            name: 'zusammenfassung',
            label: 'Zusammenfassung',
            component: <SummarySection minimized={true} />,
        },
        {
            name: 'medikation',
            label: 'Medikation',
            component: <MedicationSection minimized={true} />,
        },
        {
            name: 'diagnose',
            label: 'Diagnose',
            component: <DiagnosisSection minimized={true} />,
        },
    ];

    return (
        <div className='px-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
            {
                sections?.map((section, index) => {
                    return <div key={index} className='h-[40vh] overflow-hidden'>
                        {section?.component}
                    </div>
                })
            }
        </div>
    );
};

export default OverviewSection;