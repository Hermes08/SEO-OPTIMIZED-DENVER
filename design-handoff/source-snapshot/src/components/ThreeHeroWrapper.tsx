
'use client';

import dynamic from 'next/dynamic';

const ThreeHero = dynamic(() => import('./ThreeHero'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gray-50/50" />
});

export const ThreeHeroWrapper = () => {
    return <ThreeHero />;
};
