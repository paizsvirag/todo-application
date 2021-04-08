import React, { useState } from "react";
import TodoItem from '../todo-item/todoItem';

export default function TodoList() {
    //TODO: todo list
    const [title, setTitle] = useState('');
    const updateTitle = () => setTitle(title);

    //TODO: list out todo items
    return(<div>
        <TodoItem />
        <input
            className="todo-title-input"
            type="text"
            onChange={updateTitle}
        />
    </div>)
}