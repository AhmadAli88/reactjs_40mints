import React from "react";

const TodoItem = ({completed, text, id, toggleTodo, deleteTodo}) => {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            id=""
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {text}
        </label>
        <button
            onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
