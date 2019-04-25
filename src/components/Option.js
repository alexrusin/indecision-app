import React from 'react';

const Option = (props) => (
    <li key={props.index}>{props.option}  
        <button 
        className="button button--link"
        type="button" 
        onClick={(e) => {
            props.handleDeleteOption(props.option)
        }}
        >
        remove
        </button>
    </li>
);

export default Option;