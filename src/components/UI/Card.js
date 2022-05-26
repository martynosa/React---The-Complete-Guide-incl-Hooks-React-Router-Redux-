import './Card.css';

// WRAPPER COMPONENT
// CHILDREN RESERVED NAME FOR EVERYTHING BETWEEN THE OPENING AND CLOSING TAG OF A COMPONENT

function Card({ children, className }) {
  const classes = 'card ' + className;
  console.log(classes);
  return <div className={classes}>{children}</div>;
}

export default Card;
