import React from 'react';

const generateCss = function(textColor) {
    let css = {
        fontSize: '1.3em',
        fontWeight: 'bold'
    };
    let colorCss = { color: textColor };

    return Object.assign({}, css, colorCss);
};

const divCss = {
    textAlign: 'center'
};

const DateDisplay = function(props) {

    return (
        <div style={divCss}>
            <span style={generateCss(props.textColor)}>{props.dateStr}</span>
        </div>
    );
};

export default DateDisplay;