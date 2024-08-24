"use client"
import { User as HouseIcon} from "lucide-react";
import {Users as FlameIcon} from "lucide-react"
import {Earth as BeanIcon} from "lucide-react"
import { Button } from "./button";

import React, { useState } from 'react';


// const Privacy = () => {
//   const [state, setState] = useState(0);

//   const handleButtonClick = () => {
//     setState((prevState) => (prevState + 1) % 3);
//   };

//   let buttonConfig = {
//     className: 'bg-blue-500 hover:bg-blue-600 w-12 h-12',
//     icon: <HouseIcon className="w-6 h-6" />,
//     translateValue: '-translate-x-1/2 -translate-y-[75%]',
//   };

//   switch (state) {
//     case 1:
//       buttonConfig = {
//         className: 'bg-green-500 hover:bg-green-600 w-14 h-14',
//         icon: <FlameIcon className="w-8 h-8" />,
//         translateValue: '-translate-x-1/2 -translate-y-[75%]',
//       };
//       break;
//     case 2:
//       buttonConfig = {
//         className: 'bg-yellow-500 hover:bg-yellow-600 w-16 h-16',
//         icon: <BeanIcon className="w-10 h-10" />,
//         translateValue: '-translate-x-1/2 -translate-y-[75%]',
//       };
//       break;
//     default:
//       break;
//   }

//   return (
//     <Button
//       onClick={handleButtonClick}
//       className={`${buttonConfig.className} text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out absolute left-1/2 top-1/2 ${buttonConfig.translateValue}`}
//       >
//       {buttonConfig.icon}
//     </Button>
//   );
// };


// const Privacy = () => {
//     const [state, setState] = useState<0 | 1 | 2>(0);

//     const handleButtonClick = () => {
//         setState((prevState) => (prevState + 1) % 3 as 0 | 1 | 2);
//       };

//       const concentricCircleStyles = [
//         'bg-[rgb(195,237,169)] w-12 h-12 rounded-full shadow-[0px_0px_0px_12px_rgba(255,186,221,0.5),0px_0px_0px_20px_rgba(102,66,247,0.75)]', 
//         'bg-[rgb(255,186,221)] w-16 h-16 rounded-full shadow-[0px_0px_0px_10px_rgba(102,66,247,0.75)]', 
//         'bg-[rgb(102,66,247)] w-20 h-20 rounded-full', 
//       ];

//     // const concentricCircleStyles = [
//     //     // First button (12px) with shadows representing 16px and 20px buttons
//     //     'bg-[rgb(195,237,169)] w-12 h-12 rounded-full shadow-[0px_0px_4px_4px_rgba(255,186,221,0.5),0px_0px_8px_8px_rgba(102,66,247,0.75)] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+4px)]',
        
//     //     // Second button (16px) with a shadow representing the 20px button
//     //     'bg-[rgb(255,186,221)] w-16 h-16 rounded-full shadow-[0px_0px_4px_4px_rgba(102,66,247,0.75)] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+4px)]',
        
//     //     // Third button (20px) with no shadow
//     //     'bg-[rgb(102,66,247)] w-20 h-20 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+0px)]',
//     //   ];
      
      
      
      
      
      

    
//       const hoverStyles = [
//         'hover:bg-[rgb(195,237,169)] hover:brightness-90',
//         'hover:bg-[rgb(255,186,221)] hover:brightness-90',
//         'hover:bg-[rgb(102,66,247)] hover:brightness-90',
//       ];
    
//       const iconSizes = [
//         'w-8 h-8', // Icon size for first state
//         'w-10 h-10', // Icon size for second state
//         'w-12 h-12', // Icon size for third state
//       ];
    
//       const buttonConfig = {
//         className: `${concentricCircleStyles[state]} ${hoverStyles[state]}`,
//         icon: state === 0 ? <HouseIcon className={iconSizes[state]} /> : state === 1 ? <FlameIcon className={iconSizes[state]} /> : <BeanIcon className={iconSizes[state]} />,
//         translateValue: '-translate-x-1/2 -translate-y-[75%]',
//       };
    
//       return (
//         <Button
//           onClick={handleButtonClick}
//           className={`${buttonConfig.className} text-white flex items-center justify-center transition-all duration-300 ease-in-out absolute left-1/2 top-1/2 ${buttonConfig.translateValue}`}
//         >
//           {buttonConfig.icon}
//         </Button>
//       );
//     };

const Privacy = () => {
    const [state, setState] = useState<0 | 1 | 2>(0);
  
    const handleButtonClick = () => {
      setState((prevState) => (prevState + 1) % 3 as 0 | 1 | 2);
    };

    const concentricCircleStyles = [
        // First button (12px) with shadows representing 16px and 20px circles
        'bg-[rgb(195,237,169)] w-12 h-12 rounded-full shadow-[0px_0px_0px_8px_rgba(255,186,221,0.75),0px_0px_0px_16px_rgba(102,66,247,0.75)]',
        
        // Second button (16px) with a shadow representing the 20px circle
        'bg-[rgb(255,186,221)] w-16 h-16 rounded-full shadow-[0px_0px_0px_8px_rgba(102,66,247,0.75)]',
        
        // Third button (20px) with no shadow
        'bg-[rgb(102,66,247)] w-20 h-20 rounded-full',
      ];
  
    const hoverStyles = [
      'hover:bg-[rgb(195,237,169)] hover:brightness-90',
      'hover:bg-[rgb(255,186,221)] hover:brightness-90',
      'hover:bg-[rgb(102,66,247)] hover:brightness-90',
    ];
  
    const iconSizes = [
      'w-8 h-8', // Icon size for first state
      'w-10 h-10', // Icon size for second state
      'w-12 h-12', // Icon size for third state
    ];
  
    const buttonConfig = {
      className: `${concentricCircleStyles[state]} ${hoverStyles[state]}`,
      icon: state === 0 ? <HouseIcon className={iconSizes[state]} /> : state === 1 ? <FlameIcon className={iconSizes[state]} /> : <BeanIcon className={iconSizes[state]} />,
      translateValue: '-translate-x-1/2 -translate-y-1/2',  // Consistent centering
    };
  
    return (
      <Button
        onClick={handleButtonClick}
        className={`${buttonConfig.className} text-white flex items-center justify-center transition-all duration-300 ease-in-out absolute left-1/2 top-[35%] ${buttonConfig.translateValue}`}
      >
        {buttonConfig.icon}
      </Button>
    );
  };
  
  export default Privacy;
  