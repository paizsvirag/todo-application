import React, { useState, useEffect } from "react";
import TodoItem from '../todo-item/todoItem';
import './todoList.css';
import * as data from './../../data/data.json' 

export default function TodoList() {
    //TODO: todo list
    const [title, setTitle] = useState('');
    const updateTitle = () => setTitle(title);
    const [todoItems, setTodoItems] = useState([]);

    

    //const deleteItem = () => 
    //TODO: list out todo items
    return(<div className="todo-list-wrapper">
        {data.map((element) => {
            if(element.done) {
                return (
                <div className="todo-list-item-wrapper">
                    <TodoItem />
                    <button className="delete-button" >&times;</button>
                </div>)
            };
            return;
        })}
        <input
            className="todo-title-input"
            type="text"
            onChange={updateTitle}
        />
    </div>)
}