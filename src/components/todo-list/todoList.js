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

    const deleteTodoItem = (id, e) => {
      e.preventDefault()
        const newTodoItems = todoItems.filter((elements) => {
          return elements.id !== id;
        });

        setTodoItems(newTodoItems)
    };
    
  const addTodoItem = () => {
    //TODO: add new element to existing todo items and save to state 
  };

  return (
    <div className="todo-list-wrapper">
      {todoItems ? (
        todoItems.map((element) => {
          return (
            <div id={element.id} className="todo-list-item-wrapper">
              <TodoItem title={element.todoTitle} />
              <button
                className="delete-button"
                onClick={(e) => deleteTodoItem(element.id,e)}
              >
                &times;
              </button>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      <input className="todo-title-input" type="text" onChange={(e) => addTodoItem(e)} />
    </div>
  );
}
