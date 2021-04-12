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
      addTodoItem(event);
    }
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    const newItems = [];
    const newId = Math.floor(Math.random() * 1000000 + 1);
    newItems.push(todoItems);

    /*for(let i = 0; i < todoItems; i++) {
      console.log('newItems')
      if(newItems[i].id !== newId) {
        newItems.push({
          id: newId,
          todoTitle: e.target.value,
          done: false,
        });
      };
    };*/
    
    todoItems.forEach(element => {
      if(element.id !== newId) {
        newItems.push({
          id: newId,
          todoTitle: e.target.value,
          done: false,
        });
      };
    });

    console.log(newItems);
    //TODO: add new element to existing todo items and save to state
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
      <input
        className="todo-title-input"
        type="text"
        onKeyDown={(e) => onKeyDown(e)}
      />
    </div>
  );
}
