import React from 'react';
import dynamic from 'next/dynamic';
import { AnimatedTooltipPreview } from './components/ui/animated-tooltip-preview';

// Dynamically import the VideoFeed component
const DynamicVideoFeed = dynamic(() => import('./components/maincontent/videofeed'), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <DynamicVideoFeed />
    </div>
  );
};

export default Home;