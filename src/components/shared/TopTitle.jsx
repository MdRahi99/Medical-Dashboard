import { ArrowsPointingInIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import React from 'react';

const TopTitle = ({ title, status, onExpand, isExpanded }) => {
    return (
        <div className="flex items-center justify-between px-4 pt-4 pb-2 capitalize">
            <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold font-roboto">
                    {title}
                </h3>
                <button
                    className="bg-[#3479bf] text-white px-4 py-1 rounded-xl hover:bg-[#2e68a3] text-xs capitalize"
                    onClick={() => console.log('Quelle Button geklickt')}
                >
                    {status}
                </button>
            </div>
            <button
                className="text-gray-600 hover:text-gray-800"
                onClick={onExpand}
            >
                {isExpanded ? (
                    <ArrowsPointingInIcon className="h-5 w-5 hover:text-[#3479bf]" />
                ) : (
                    <ArrowsPointingOutIcon className="h-5 w-5 hover:text-[#3479bf]" />
                )}
            </button>
        </div>
    );
};

export default TopTitle;