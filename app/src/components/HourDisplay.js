import React from 'react';

const generateCss = function(textColor) {
    let css = {
        fontSize: '3.5em',
        fontWeight: 'bold'
    };
    let colorCss = { color: textColor };

    return Object.assign({}, css, colorCss);
};

const HourDisplay = function(props) {
    return (
        <div>
            <span style={generateCss(props.textColor)}>{props.text}</span>
        </div>
    );
};

export default HourDisplay;