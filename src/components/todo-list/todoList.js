import React, { useState } from "react";
import TodoItem from '../todo-item';
export default function TodoList() {
    const [title, setTitle] = useState('');
    const updateTitle = () => setTitle(title);

    return(<div>
        <TodoItem />
        <input
            className="todo-title-input"
            type="text"
            id="text-id"
            onChange={updateTitle}
        />
    </div>)
}