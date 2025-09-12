import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Counter.module.scss";
import Button from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../modal/slice/counterSlice";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  className?: string;
}

function Counter(props: CounterProps) {

  const dispatch = useDispatch();
  const counterValue =useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  };
  const decrement = () => {
dispatch(counterActions.decrement())
  };

  const { className } = props;

  return (
      <div className={classNames(cls.counter, {}, [className])}>
          <h1>value = {counterValue}</h1>
          <Button onClick={increment}>increment</Button>
          <Button onClick={decrement}>decrement</Button>
      </div>
  );
}

export default Counter;
