import React from 'react';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';

import { CartIcon } from './CartIcon';

import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBump, setbtnBump] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnBump(true);

    const timer = setTimeout(() => {
      setbtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
