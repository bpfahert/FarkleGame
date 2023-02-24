import React from 'react';
import Dice from './Dice';

export default function Gameboard(props) {



    return(
        <div className='container bg-info' style={{border:'solid 2px black', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', maxWidth: '540px'}}>
            <Dice value='2' />
            <Dice value='5' />
            <Dice value='3' />
            <Dice value='4' />
            <Dice value='1' />
            <Dice value='6' />
        </div>

    )
}