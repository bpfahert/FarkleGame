import React from "react";

export default function Dice(props) {
    

    return(
        <div aria-label='dice' className='card border-dark' style={{width: '3rem', height: '3rem', alignItems: 'center', justifyContent: 'center'}}>
            {props.value}
        </div>
    )
}