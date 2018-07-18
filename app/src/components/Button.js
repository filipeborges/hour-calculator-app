import React from 'react';

const css = {
    width: '50px',
    height: '50px',
    fontSize: '2em'
};

const Button = function(props) {
    return (
        <button style={css}>
            {props.text}
        </button>
    );
};

export default Button;