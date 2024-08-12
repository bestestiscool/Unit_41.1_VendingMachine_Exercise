import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
  return (
    <div>
      <h1>Candy</h1>
      <p>Sweet and tasty candy!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Candy;
