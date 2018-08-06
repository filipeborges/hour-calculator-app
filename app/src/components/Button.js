import React from 'react';

const css = {
    width: '1.7em',
    height: '1.7em',
    fontSize: '2em'
};

const Button = function(props) {
    return (
        <button onClick={props.onClick} style={css}>
            {props.text}
        </button>
    );
};

export default Button;