import React from 'react';

const Option = (props) => {
    return (
        <li key={props.index}>{props.option}  
            <button 
            type="button" 
            onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}
            >
            delete
            </button>
        </li>
    );
};

export default Option;