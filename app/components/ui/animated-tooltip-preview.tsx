// app/components/ui/animated-tooltip-preview.tsx
import React from 'react';
import { AnimatedTooltip } from '../ui/animated-tooltip';

const people = [
  {
    id: 1,
    name: 'Willem Dafoe',
    designation: 'Big Dick',
    image:
    'https://d2hn7jzlo6ol55.cloudfront.net/wp-content/uploads/2016/04/willem-dafoe-mind-the-gap.jpg',
  },
  {
    id: 2,
    name: 'David Bowie',
    designation: 'Aladdin Sane',
    image:
      'https://media.mcachicago.org/image/IBI5Z38F/original.jpg',
  },
  {
    id: 3,
    name: 'Sid Taneja',
    designation: 'Hubba Hubba',
    image:
      'https://www.gessato.com/wp-content/uploads/2012/03/hilarious-celebrity-photography-martin-schoeller-gessato-gblog-19.jpg',
  },
  {
    id: 4,
    name: 'Biggie Smalls',
    designation: 'Rapper',
    image:
      'https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f',
  },
  {
    id: 5,
    name: 'Victor Ayaay',
    designation: 'Mr. Sexy',
    image:
      'https://media.licdn.com/dms/image/D5603AQG4OQX3rb_6Lg/profile-displayphoto-shrink_400_400/0/1705790803394?e=1727913600&v=beta&t=L8xAZXCvjmauWI6krlxg5gAXo7-qoWq74uxyCNNNc40',
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip
        items={people}
      />
    </div>
  );
}
