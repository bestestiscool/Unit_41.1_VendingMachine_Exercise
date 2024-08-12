import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div>
      <h1>Soda</h1>
      <p>Enjoy your refreshing soda!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Soda;
