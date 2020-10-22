import React, { useContext } from "react";
import Context from "../context";

function ListItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="todo__list-li">
      <span className={classes.join(" ")} onClick={() => onChange(todo.id)}>
        {todo.title}
      </span>
      <span className="todo__btn-edit">
        <svg
          aria-hidden="true"
          className="iconPencilSm"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"></path>
        </svg>
      </span>
      <span
        onClick={removeTodo.bind(null, todo.id)}
        className="todo__btn-delete"
      >
        &times;
      </span>
    </li>
  );
}
export default ListItem;
