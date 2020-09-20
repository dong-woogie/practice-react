import React from "react";
import Counter from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <>
      <Counter />
      <hr></hr>
      <TodosContainer />
    </>
  );
}

export default App;
