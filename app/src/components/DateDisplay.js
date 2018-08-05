import React from 'react';

const generateCss = function(textColor) {
    let css = {
        fontSize: '1.5em',
        fontWeight: 'bold'
    };
    let colorCss = { color: textColor };

    return Object.assign({}, css, colorCss);
};

const DateDisplay = function(props) {

    return (
        <div>
            <span style={generateCss(props.textColor)}>{props.dateStr}</span>
        </div>
    );
};

export default DateDisplay;