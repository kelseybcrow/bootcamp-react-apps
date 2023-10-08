import { useState } from 'react';
import { Seat } from './Seat';
import './index.css';

function App() {
  const numberOfSeats = 48;

  return (
    <>
      <div className='App'>
        <div className='carriage'>
          {new Array(numberOfSeats / 4).fill(null).map((row) => {
            <div key={row} className='carriage-row'>
              <Seat number={row * 4 + 1} />
              <Seat number={row * 4 + 2} />
              <div className='aisle-spacer'></div>
              <Seat number={row * 4 + 3} />
              <Seat number={row * 4 + 4} />
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
