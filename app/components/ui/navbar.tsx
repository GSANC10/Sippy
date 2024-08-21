'use client'
import React, { memo } from 'react';
import { AnimatedTooltipPreview } from './animated-tooltip-preview';
import SparklesText from './sparkles';
import Link from "next/link";
import ToggleMode from "./togglemode"; // Assuming you have a ToggleMode component
import { Flame, Home, MapIcon, MessageSquare } from 'lucide-react';
import Login from './login';
import DailyPosts from './dailyposts';
const Navbar = () => {
  return (
    <nav className="relative flex items-center pl-9 w-full max-w-screen-xl mx-auto mt-4">
      Navbar Content Container
      <div className="flex items-center w-full justify-between">
        {/* Animated Tooltip Preview */}
        <div className="flex-shrink-0 mr-4 mt-8">
          {/* <DailyPosts/> */}
          <AnimatedTooltipPreview />
        </div>
        {/* Centered Text Container */}
        <div className="flex-grow flex items-center justify-center">
          <SparklesText text={'SIPPY!'} />
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);