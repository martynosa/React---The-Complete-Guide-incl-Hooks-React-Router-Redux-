import React from 'react';
import './Card.css';

// WRAPPER COMPONENT
// CHILDREN RESERVED NAME FOR EVERYTHING BETWEEN THE OPENING AND CLOSING TAG OF A COMPONENT

function Card({ children, className }) {
  const classes = 'card ' + className;
  return <div className={classes}>{children}</div>;
}

export default Card;
