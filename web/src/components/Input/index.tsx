import React from 'react';

interface InputProps {
    name: string;
    label: string;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} />
        </div>
    );
}

export default Input;