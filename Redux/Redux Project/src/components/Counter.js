import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const showCounter = useSelector((state) => {
    return state.counter.showCounter;
  });

  // VANILLA WAY
  // const incrHandler = () => {
  //   dispatch({ type: 'INCR' });
  // };

  // const decrHandler = () => {
  //   dispatch({ type: 'DECR' });
  // };

  // const plusFive = () => {
  //   dispatch({ type: 'PLUS_NUMBER', payload: 5 });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'TOGGLE' });
  // };

  const incrHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrHandler = () => {
    dispatch(counterActions.decrement());
  };

  const plusFive = () => {
    dispatch(counterActions.plusFive(5)); // {type: UNIQUE_IDENTIFIER, payload: the directly passed value on the method}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrHandler}>INCR</button>
        <button onClick={decrHandler}>DECR</button>
        <button onClick={plusFive}>+5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
