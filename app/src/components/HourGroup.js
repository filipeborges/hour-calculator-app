import React from 'react';
import HourDisplay from './HourDisplay';

const lineCss = {
    height: '1px',
    backgroundColor: '#000'
};

const containerCss = {
    width: '182px'
};

const HourGroup = function(props) {
    return (
        <div style={containerCss}>
            <HourDisplay text={props.firstOperand} />
            <HourDisplay text={props.secondOperand} 
                textColor={props.secondOperandColor} 
            />
            <hr style={lineCss}/>
            <HourDisplay text={props.result} textColor="blue" />
        </div>
    );
};

export default HourGroup;