import React from 'react';



const Button = ({children, onClick, className, type}) => {
  return (
    <>
        <button 
            type={type} 
            onClick={onClick} 
            className={`flex justify-between items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-md transition duration-300 ease-in-out ${className}`}>
            {children}
        </button>
    </>
    
  );
}

export default Button;
