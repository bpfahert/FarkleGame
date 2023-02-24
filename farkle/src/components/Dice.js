import React from "react";

export default function Dice(props) {
    
    return(
        <div aria-label='dice' className='card border-dark' style={{alignItems: 'center', justifyContent: 'center', height:'3rem', width: '3rem'}}>
            {props.value}
        </div>
    )
}
