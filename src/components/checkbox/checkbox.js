import React from "react";

function Checkbox({disabled = false,checked,
    onChange}) {

    const handler = !disabled ? onChange : undefined;

    return(
        <input
            className="checkbox-input"
            type="checkbox"
            disabled={disabled}
            checked={checked}
            onChange={handler}
        />
    );
};

export default Checkbox;
