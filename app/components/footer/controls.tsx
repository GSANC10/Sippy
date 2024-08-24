import React from 'react';
import House from '../ui/home';
import Privacy from '../ui/privacy-button';
import Flame from '../ui/activity';
import Messages from '../ui/messages';
import ToggleMode from '../ui/togglemode';
import Login from '../ui/login';
import Menu from '../ui/menu';
import Link from 'next/link';
import Image from 'next/image';

function Controls() {
  return (
    // <div className="controls">
    //   {/* <button><i className="camera-icon" /></button>
    //   <button><i className="mic-icon" /></button> */}

    //   <House />
    // </div>

    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-20 flex flex-row justify-between h-20 md:w-24 lg:w-32 z-10">
        <div className="my-4">
          <Privacy />
        </div>
      </div>
    
  );
}

export default Controls;