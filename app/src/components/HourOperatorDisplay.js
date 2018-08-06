import React from 'react';
import Constants from '../utils/constants';

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
            <span style={generateCss(props.textColor)}>
                {props.text ? props.text : Constants.WHITE_SPACE_CHAR}
            </span>
        </div>
    );
};

export const OperatorDisplay = HourDisplay;