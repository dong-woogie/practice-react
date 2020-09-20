import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, addTodo } from "../modules/todos";
import Todos from "../components/Todos";

function TodosContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
