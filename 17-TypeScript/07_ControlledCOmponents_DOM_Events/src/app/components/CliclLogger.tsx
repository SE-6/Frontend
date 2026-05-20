'use client';

import { MouseEventHandler, type MouseEvent } from 'react';

const CliclLogger = () => {
  //   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log('clicked at: ', event.clientX, event.clientY);
  //     console.log('alt key hold:', event.altKey);
  //   };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('clicked at: ', event.clientX, event.clientY);
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default CliclLogger;
