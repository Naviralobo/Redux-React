import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment", amount: 1 });
    dispatch(counterActions.increment(1)); //{type:some unique identifier,payload:10}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  };
  const incrementBy5Handler = () => {
    dispatch(counterActions.increment(5));
  };
  const decrementBy5Handler = () => {
    dispatch(counterActions.decrement(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
