import React from 'react';

const TopTitle = ({ title, status, onExpand, isExpanded }) => {
    return (
        <div className="flex items-center justify-between px-4 pb-4 capitalize">
            <h3 className="text-xl font-semibold font-roboto">
                {title}
            </h3>
            <button
                className="bg-[#3479bf] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2e68a3] text-sm capitalize"
                onClick={() => console.log('Quelle Button geklickt')}
            >
                {status}
            </button>
        </div>
    );
};

export default TopTitle;