import React from 'react';
import Gameboard from './components/Gameboard';

export default function App() {
  return (
    <div className='container-fluid'>
      <h1>Farkle!</h1>
      <Gameboard />
    </div>
  );
}