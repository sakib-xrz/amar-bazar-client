import React from 'react';

const ButtonPrimary = (props) => {
    return (
      <button
        className="bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-dark 
    duration-500"
      >
        {props.children}
      </button>
    );
};

export default ButtonPrimary;