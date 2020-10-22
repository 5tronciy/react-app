import React from "react";
import ListItem from "./ListItem";

function TodoList(props) {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return <ListItem todo={todo} key={todo.id} onChange={props.onToggle} />;
      })}
    </ul>
  );
}

export default TodoList;
