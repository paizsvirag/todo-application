import React, { useState } from "react";
import { Checkbox } from "./checkbox";

export default function TodoItem() {
    const [checked, setChecked] = useState(false);
    const [title, setTitle] = useState('');
    const updateCheckbox = () => setChecked(!checked);
    const updateTitle = () => setTitle(title);

    return(
        <div className="todo-item-wrapper">
        <Checkbox
         name="checkbox"
         checked={checked}
         onChange={updateCheckbox}
        />
        <div className="">
        <input
            className="title-input"
            type="text"
            id="title-id"
            onChange={updateTitle}
        />
        </div>
        </div>
    )
}

