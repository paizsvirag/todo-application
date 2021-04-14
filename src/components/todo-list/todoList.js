import React, { useState, useEffect } from "react";
import TodoItem from "../todo-item/todoItem";
import "./todoList.scss";
import data from "./../../data/data.json";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [checked, setChecked] = useState(false);

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
    addTodoItem();
    setNewTitle("");
  };

  const addTodoItem = () => {
    const id = Math.floor(Math.random() * 1000000 + 1);
    const newItems = {
      id,
      todoTitle: newTitle,
      done: false,
    };

    const newItemsList = [...todoItems, newItems];

    setTodoItems(newItemsList);
  };

  const handleCheckbox = (id, e) => {
    setChecked(!checked);
    changeStatus(id);
  };

  const changeStatus = (currentId) => {
    const checkedTodoItems = todoItems.filter((elements) => {
      let updatableStatus = {};
      if (elements.id === currentId) {
        updatableStatus = {
          id: elements.id,
          todoTitle: elements.todoTitle,
          done: checked,
        };
      }
      return updatableStatus;
    });
    console.log(checkedTodoItems);
  };
  // TODO: checkboxes states changes
  // TODO: unique title & id check
  return (
    <div className="todo-list-wrapper">
      <h1>ToDo List Application</h1>
      {todoItems.map((element) => {
        return (
          <div id={element.id} className="todo-list-item-wrapper">
            <TodoItem
              title={element.todoTitle}
              isChecked={element.done}
              updateCheckbox={(e) => handleCheckbox(element.id, e)}
            />
            <button
              className="delete-button"
              onClick={(e) => deleteTodoItem(element.id, e)}
            >
              &times;
            </button>
          </div>
        );
      })}
      ;
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="todo-title-input"
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
