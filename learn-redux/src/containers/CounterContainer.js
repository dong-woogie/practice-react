import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onDiff={setDiff}
    />
  );
}

const mapToStateProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapToDispatchProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onDiff: (diff) => dispatch(setDiff(diff)),
// });

const mapToDispatchProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapToStateProps, mapToDispatchProps)(CounterContainer);
