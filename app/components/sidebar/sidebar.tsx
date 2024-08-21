import React from 'react';
import House from '../ui/home';
import Flame from '../ui/activity';
import Messages from '../ui/messages';
import ToggleMode from '../ui/togglemode';
import Login from '../ui/login';
import Menu from '../ui/menu';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-20 flex flex-col justify-between h-screen md:w-24 lg:w-32 md:left-8 z-10 lg:left-12">
      {/* Logo */}
      <div className="flex justify-center mt-14">
       <a href="/">
          <Image
              src="/favicon.ico"
              alt="Logo"
              width={40} // Set the width according to your needs
              height={40} // Set the height according to your needs
              className="object-contain"
            />
          </a>
      </div>
      
      {/* Main content of the sidebar */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="my-4">
          <House />
        </div>
        <div className="my-4">
          <Flame />
        </div>
        <div className="my-4">
          <Messages />
        </div>
        <div className="my-4">
          <ToggleMode />
        </div>
        <div className="my-4">
          <Login />
        </div>
      </div>
      
      {/* Menu positioned at the bottom */}
      <div className="flex justify-center mb-4">
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
