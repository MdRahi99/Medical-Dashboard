import React, { useState } from 'react';

const DynamicTab = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].name);

  return (
    <div className="w-full space-y-8 md:space-y-12">
      {/* Tab Headers */}
      <div className="flex items-center gap-6 overflow-auto no-scrollbar md:gap-12 border-b border-gray-200 mb-4 px-4">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`px-4 py-2 font-roboto font-semibold transition-colors duration-300 ${
              activeTab === section.name
                ? 'border-b-2 border-[#2E68A3] text-[#2E68A3]'
                : 'text-[#2c2c2c] hover:text-[#2E68A3] hover:border-b-2 border-[#2E68A3] transition-all duration-100 ease-in-out'
            }`}
            onClick={() => setActiveTab(section.name)}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {sections.map(
          (section) =>
            activeTab === section.name && (
              <div key={section.name}>{section.component}</div>
            )
        )}
      </div>
    </div>
  );
};

export default DynamicTab;
