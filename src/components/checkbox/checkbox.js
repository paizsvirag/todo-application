import React from "react";

export default function Checkbox({disabled = false,checked,
    onChange}) {

    const handler = !disabled ? onChange : undefined;

    return(
        <input
            className="checkbox-input"
            type="checkbox"
            id="checkbox-id"
            disabled={disabled}
            checked={checked}
            onChange={handler}
            area-labelledby="checkbox-label"
        />
    )
}