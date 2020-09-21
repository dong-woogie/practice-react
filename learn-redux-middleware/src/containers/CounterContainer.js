import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
