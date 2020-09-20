import React, { useState } from "react";
import TodoList from "./TodoList";

function Todos({ onCreate, onToggle, todos }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        할일 입력하기 : <input type="text" onChange={onChange} value={text} />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle}></TodoList>
    </div>
  );
}

export default React.memo(Todos);
