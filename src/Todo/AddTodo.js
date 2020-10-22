import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <form onSubmit={submitHandler} className="todo__input">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo__input-newTodo"
        placeholder="Введите задание..."
      />
    </form>
  );
}

export default AddTodo;
