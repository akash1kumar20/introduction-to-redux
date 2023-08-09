import classes from "./Counter.module.css";
import { counterActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  //telling react that we want to dive into counter slice and next counter is the value.
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    //value pass as the argument is stored as the payload by the redux-toolkit
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetValue = () => {
    dispatch(counterActions.reset());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decremenent</button>
        <button onClick={resetValue}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
