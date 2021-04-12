import React, { useState, useEffect } from "react";
import TodoItem from "../todo-item/todoItem";
import "./todoList.scss";
import data from "./../../data/data.json";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(function updateDataToTodoItems() {
    setTodoItems(data);
  }, []);

  const deleteTodoItem = (id, e) => {
    e.preventDefault();
    const newTodoItems = todoItems.filter((elements) => {
      return elements.id !== id;
    });

    setTodoItems(newTodoItems);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      addTodoItem(event.target.value);
    }
  };

  const addTodoItem = (todoTitle) => {
    const id = Math.floor(Math.random() * 1000000 + 1);
    const newItem = {
      id,
      todoTitle,
      done: false,
    }

    console.log(newItem);
  };

  return (
    <div className="todo-list-wrapper">
      <h1>ToDo List Application</h1>
      {todoItems ? (
        todoItems.map((element) => {
          return (
            <div id={element.id} className="todo-list-item-wrapper">
              <TodoItem title={element.todoTitle} />
              <button
                className="delete-button"
                onClick={(e) => deleteTodoItem(element.id, e)}
              >
                &times;
              </button>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      {/* TODO form element */}
      <input
        className="todo-title-input"
        type="text"
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
  );
}
