import React, { useState } from 'react';

const DynamicTab = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].name);

  return (
    <div className="w-full space-y-8 md:space-y-12">
      {/* Tab Headers */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4">
        <div className="flex items-center gap-6 overflow-auto no-scrollbar md:gap-12">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`px-4 py-2 font-roboto font-semibold transition-colors duration-300 ${
                activeTab === section.name
                  ? 'text-white bg-[#2E68A3] rounded-t-lg'
                  : 'text-[#2c2c2c] hover:text-white hover:bg-[#2E68A3] rounded-t-lg transition-all duration-100 ease-in-out'
              }`}
              onClick={() => setActiveTab(section.name)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
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
