import React from 'react';

const TopTitle = ({ title, status, onExpand, isExpanded, minimized }) => {
    return (
        <div className={`flex items-center justify-between ${minimized ? 'px-2 py-2' : 'px-4 pb-4'} capitalize`}>
            <h3 className={`${minimized ? 'text-lg' : 'text-xl font-roboto'} font-semibold`}>
                {title}
            </h3>
            <button
                className={`${minimized ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-[#3479bf] text-white rounded-lg font-semibold hover:bg-[#2e68a3] capitalize`}
                onClick={() => console.log('Quelle Button geklickt')}
            >
                {status}
            </button>
        </div>
    );
};

export default TopTitle;