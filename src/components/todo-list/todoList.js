import React, { useState, useEffect } from "react";
import TodoItem from "../todo-item/todoItem";
import "./todoList.scss";
import data from "./../../data/data.json";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  useEffect(function () {
    setTodoItems(data);
  }, []);

  const deleteTodoItem = (id, e) => {
    e.preventDefault();
    const newTodoItems = todoItems.filter((elements) => {
      return elements.id !== id;
    });

    setTodoItems(newTodoItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemList = [];
    alert("This is the new todo item:" + newItem.todoTitle);
    itemList.push(todoItems, newItem);
    console.log(itemList);
    setTodoItems(itemList);
  };

  const addTodoItem = (todoTitle) => {
    const id = Math.floor(Math.random() * 1000000 + 1);
    const newItems = {
      id,
      todoTitle,
      done: false,
    };

    setNewItem(newItems);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="todo-title-input"
          type="text"
          onChange={(e) => addTodoItem(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
