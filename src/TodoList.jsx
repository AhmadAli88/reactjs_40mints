import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <ul className="list">
        {todo.length === 0 && <span>No todo found</span>}
        {todo.map((item) => (
          <TodoItem
            {...item}
            key={item.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            // id={item.id}
            // completed={item.completed}
            // title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
