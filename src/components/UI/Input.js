import React from 'react';
import './Input.css';
const Input = (props) => {
    let inputElement=null;
    let classesToApply=['Input'];
    if(props.invalid && props.touched)
    {
        classesToApply.push('Invalid');
    }
    switch(props.elementType)
    {
        case 'input':
        inputElement=<input className={classesToApply.join(' ')} {...props.elementConfig} onChange={props.changed}/>;
        break;
        default:
        inputElement=<input/>
    }
    return (
        <div className="form-element">
            <label className="Label">{props.label}</label>
            {inputElement}
            {props.invalid && props.touched && <span className="ValidateError">{'!'+props.message}</span>}
        </div>
    );
};

export default Input;