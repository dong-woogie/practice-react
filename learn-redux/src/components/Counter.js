import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onDiff }) {
  const onChange = (e) => {
    onDiff(+e.target.value);
  };
  return (
    <div>
      <input type="number" value={diff} onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <div>{number}</div>
    </div>
  );
}

export default Counter;
