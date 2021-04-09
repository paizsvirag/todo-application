import React, { useState, useEffect } from "react";
import TodoItem from '../todo-item/todoItem';
import './todoList.css';
import * as data from './../../data/data.json' 

export default function TodoList() {
    //TODO: todo list
    const [title, setTitle] = useState('');
    const updateTitle = () => setTitle(title);
    const [todoItems, setTodoItems] = useState([]);

    useEffect( function updateDataToTodoItems(){
        setTodoItems(data);
    },[] )

    /**/
    //const deleteItem = () => 
    //TODO: list out todo items
    return(<div className="todo-list-wrapper">
        {todoItems.default ? todoItems.default.map((element) => {
            if(element.done) {
                return (
                <div className="todo-list-item-wrapper">
                    <TodoItem title={element.todoTitle}/>
                    <button className="delete-button" >&times;</button>
                </div>)
            };
            return null;
        }): <div></div>}
        <input
            className="todo-title-input"
            type="text"
            onChange={updateTitle}
        />
    </div>)
}