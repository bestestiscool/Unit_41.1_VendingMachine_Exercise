import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>  
      <h1>Good morning</h1>
      <p>Select a snack:</p>
      <ul>
        <li><Link to="/soda">Soda</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/candy">Candy</Link></li>
      </ul>
    </div>
  );
};

export default VendingMachine;
