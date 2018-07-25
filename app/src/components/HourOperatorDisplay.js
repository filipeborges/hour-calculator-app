import React from 'react';

const generateCss = function(textColor) {
    let css = {
        fontSize: '3.5em',
        fontWeight: 'bold'
    };
    let colorCss = { color: textColor };

    return Object.assign({}, css, colorCss);
};

const generateContainerCss = function(customCss) {
    let css = {
        display: 'inline-block'
    };
    return Object.assign({}, css, customCss);
};

export const HourDisplay = function(props) {
    return (
        <div style={ generateContainerCss(props.containerCss)  }>
            <span style={generateCss(props.textColor)}>{props.text}</span>
        </div>
    );
};

export const OperatorDisplay = HourDisplay;