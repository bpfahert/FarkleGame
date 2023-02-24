import React from 'react';
import Dice from './Dice';

export default function Gameboard(props) {



    return(
        <div className='container-xl'>
            <div className='card bg-info' style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Dice value='1' />
            </div>
        </div>
    )
}