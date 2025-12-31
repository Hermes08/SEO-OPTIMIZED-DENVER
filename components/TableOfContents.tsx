
import React from 'react';

export const TableOfContents = () => {
  // Mock headings for the template
  const headings = [
    { id: '1', text: 'Why Your Electrical Panel Matters' },
    { id: '2', text: 'Frequent Breaker Trips' },
    { id: '3', text: 'Flickering or Dimming Lights' },
    { id: '4', text: 'Burning Smells or Scorch Marks' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
        <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Table of Contents</h4>
        <ul className="space-y-2">
            {headings.map(h => (
                <li key={h.id}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                        {h.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  );
};
