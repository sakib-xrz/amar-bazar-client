import React from 'react';

const Heading = ({children}) => {
    return (
      <div className="relative border-b-[1px] border-dark border-opacity-20 py-2">
        <h2 className="text-primary font-medium text-4xl">{children}</h2>
        <div className="w-[100px] h-[2px] absolute bg-primary bottom-[-1px] rounded-full"></div>
      </div>
    );
};

export default Heading;