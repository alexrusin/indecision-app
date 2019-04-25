import React from 'react';

const Option = (props) => (
    <div
    className="option" 
    key={props.index}>
        <p className="option__text">
            {props.count}. {props.optionText}  
        </p>
        <button 
        className="button button--link"
        type="button" 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }}
        >
        remove
        </button>
    </div>
);

export default Option;