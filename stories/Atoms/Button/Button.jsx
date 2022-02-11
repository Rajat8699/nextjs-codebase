import React from 'react';

const CustomButton=({className,onClick,children,variant})=>{
    return(
        <div>
            <button className={`p-2 ${variant==="secondary"?'btn-secondary':'btn-primary'}`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}
export default CustomButton;