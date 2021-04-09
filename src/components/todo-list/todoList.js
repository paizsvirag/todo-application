import React, { useState, useEffect } from "react";
import TodoItem from "../todo-item/todoItem";
import "./todoList.scss";
import data from "./../../data/data.json";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  
  useEffect(function updateDataToTodoItems() {
      setTodoItems(data);
    }, []);
    
    const updateTitle = () => setTitle(title);

    const deleteTodoItem = (id) => {
        //const newTodoItems = todoItems.filter()
    };
    
  const addTodoItem = () => {};

  return (
    <div className="todo-list-wrapper">
      {todoItems ? (
        todoItems.map((element) => {
          return (
            <div id={element.id} className="todo-list-item-wrapper">
              <TodoItem title={element.todoTitle} />
              <button
                className="delete-button"
                onClick={deleteTodoItem(element.id)}
              >
                &times;
              </button>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      <input className="todo-title-input" type="text" onChange={updateTitle} />
    </div>
  );
}
