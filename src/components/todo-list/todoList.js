import React, { useState, useEffect } from "react";
import TodoItem from "../todo-item/todoItem";
import "./todoList.scss";
import data from "./../../data/data.json";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTitle, setNewTitle] = useState("");

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

  const addSubToDoItem = () => {

  };

  const titleValidation = (newId) => {
    const oldIdExists = todoItems.includes(({ id }) => id === newId);
    const oldTitleExists = todoItems.includes(
      ({ todoTitle }) => todoTitle === newTitle
    );
    //TODO: fix this
    if (oldIdExists || oldTitleExists) {
      return false;
    } else {
      return true;
    }
  };

  const addTodoItem = () => {
    const id = Math.floor(Math.random() * 1000000 + 1);
    const newItems = {
      id,
      todoTitle: newTitle,
      done: false,
    };

    if (titleValidation(id)) {
      const newItemsList = [...todoItems, newItems];
      setTodoItems(newItemsList);
    }
  };


  const handleCheckbox = (currentId) => {
    const newTodoItems = todoItems.map(({ id, todoTitle, done }) => ({
      id,
      todoTitle,
      done: id === currentId ? !done : done,
    }));

    setTodoItems(newTodoItems);
  };
  // TODO: unique title & id check
  return (
    <div className={"todo-list-wrapper"}>
      <h1>ToDo List Application</h1>
      {todoItems.map((element) => {
        return (
          <div key={element.id} id={element.id} className={`todo-list-item-wrapper-${element.done}`}>
            <TodoItem
              title={element.todoTitle}
              isChecked={element.done}
              updateCheckbox={(e) => handleCheckbox(element.id, e)}
            />
            <button 
              className="subtask-button"
              onClick={() => addSubToDoItem()}>Add</button>
            <button
              className="delete-button"
              onClick={(e) => deleteTodoItem(element.id, e)}
            >
              &times;
            </button>
          </div>
        );
      })}
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
