import React, { useState } from "react";
import Checkbox from "../checkbox";

function TodoItem({title, isChecked}) {
    const [checked, setChecked] = useState(false);
    const updateCheckbox = () => setChecked(!checked);

    return(
        <div className="todo-item-wrapper">
        <Checkbox
         name="checkbox"
         checked={checked}
         onChange={updateCheckbox}
        />
        <span>{title}</span>
        </div>
    )
};

export default TodoItem;
