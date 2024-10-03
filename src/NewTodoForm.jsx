import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItem === "") return;
    addTodo(newItem)
    // setTodo((currentTodo) => {
    //   return [
    //     ...currentTodo,
    //     { id: Date.now(), text: newItem, completed: false },
    //   ];
    // });
    setNewItem("");
  };
//   console.log("todo", todo);
  return (
    <div>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
