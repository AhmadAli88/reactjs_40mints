import React, { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState(()=>{
    const localData = JSON.parse(localStorage.getItem("todo"));
    return localData || [];
  });
  function toggleTodo(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((t) => (t.id === id ? { ...t, completed } : t));
    });
  }
  function addTodo(text) {
    setTodo((currentTodo) => {
      return [...currentTodo, { id: Date.now(), text, completed: false }];
    });
  }
  function deleteTodo(id) {
    setTodo((currentTodo) => currentTodo.filter((t) => t.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
