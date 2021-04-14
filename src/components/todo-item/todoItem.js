import React, { useState } from "react";
import Checkbox from "../checkbox";

function TodoItem({ title, isChecked, updateCheckbox }) {
  return (
    <div className="todo-item-wrapper">
      <Checkbox name="checkbox" checked={isChecked} onChange={updateCheckbox} />
      <span>{title}</span>
    </div>
  );
}

export default TodoItem;
