// import React from 'react';
// import UserStats from "./userstats";
// import Favatars from './favatars';
// import SparklesText from '../ui/sparkles';

// const Header = () => {
//   return (
//     <div className="relative flex items-center justify-center">
//   {/* UserStats slightly left of center */}
//   <div className="absolute left-1/2 transform -translate-x-full sm:pr-8">
//     <UserStats />
//   </div>
  
//   {/* SparklesText centered */}
//   <div className="flex-grow text-center">
//     <SparklesText text={'SIPPY!'} />
//   </div>
  
//   {/* Favatars slightly right of center */}
//   <div className="absolute right-1/2 transform translate-x-full sm:pl-">
//     <Favatars />
//   </div>
// </div>
//   );
// }

// export default Header;
import React from 'react';
import UserStats from './userstats';
import Favatars from './favatars';
import SparklesText from '../ui/sparkles';

const Header = () => {
  return (
    <div className=" fixed flex items-center mt-3 justify-center w-full px-4 sm:px-8 lg:px-24 z-10">
      {/* UserStats positioned to the left of SIPPY! */}
      <div className="absolute left-0 sm:left-1/4 lg:left-1/4 transform -translate-x-1/2 hidden sm:block">
        <UserStats />
      </div>

      {/* SIPPY! centered horizontally */}
      <div className="flex justify-center w-full">
        <SparklesText text={'SIPPY!'} />
      </div>

      {/* Favatars positioned to the right of SIPPY! */}
      <div className="absolute right-0 sm:right-1/4 lg:right-1/4 mt-8 transform translate-x-1/2 hidden sm:block">
        <Favatars />
      </div>
    </div>
  );
}

export default Header;
