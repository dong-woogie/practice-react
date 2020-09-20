import React, { useCallback } from "react";
import { connect } from "react-redux";
import { toggleTodo, addTodo } from "../modules/todos";
import Todos from "../components/Todos";

function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback(addTodo, [addTodo]);
  const onToggle = useCallback(toggleTodo, [toggleTodo]);
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default connect(
  (state) => ({
    todos: state.todos,
  }),
  {
    addTodo,
    toggleTodo,
  }
)(TodosContainer);
