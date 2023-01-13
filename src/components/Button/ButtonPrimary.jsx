import React from 'react';

const ButtonPrimary = (props) => {
    return (
      <button
        className="bg-primary text-white py-2 px-6 rounded-md md:ml-8 hover:bg-dark 
    duration-500"
      >
        {props.children}
      </button>
    );
};

export default ButtonPrimary;