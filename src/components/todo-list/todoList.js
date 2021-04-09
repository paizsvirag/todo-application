import React, { useState, useEffect } from "react";
import TodoItem from '../todo-item/todoItem';
import './todoList.css';
import * as data from './../../data/data.json' 

export default function TodoList() {
    const [title, setTitle] = useState('');
    const updateTitle = () => setTitle(title);
    const [todoItems, setTodoItems] = useState([]);

    useEffect( function updateDataToTodoItems(){
        setTodoItems(data);
    },[] )

    const deleteTodoItem = (id) => {
        const newTodoItems = todoItems.default.filter()
    }

    const addTodoItem = () => {
         
    }

    return(<div className="todo-list-wrapper">
        {todoItems.default ? todoItems.default.map((element) => {
            if(element.done) {
                return (
                <div id={element.id} className="todo-list-item-wrapper">
                    <TodoItem title={element.todoTitle}/>
                    <button className="delete-button" onClick={deleteTodoItem(element.id)}>&times;</button>
                </div>)
            };
            return (<div><p>There is no todo for today! Yay!</p></div>);
        }): <div></div>}
        <input
            className="todo-title-input"
            type="text"
            onChange={updateTitle}
        />
    </div>)
}