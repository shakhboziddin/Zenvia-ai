import React from 'react';

const LiveBadge: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
    return (
        <div className={`inline-flex items-center gap-x-2 border border-slate-700 bg-slate-800/50 px-3 py-1.5 rounded-full ${className}`}>
            <span className="relative flex h-2 w-2">
                <span className="animate-pulse-fast absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">{text}</span>
        </div>
    );
};

export default LiveBadge;