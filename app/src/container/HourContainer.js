import React from 'react';
import HourGroup from '../components/HourGroup';

const getSecondHourColor = function(isOperatorInputted, isSumOperator) {

    if(isOperatorInputted) {
        return isSumOperator ? 'green' : 'red';
    } else {
        return undefined;
    }
}

const getFirstHourOperand = function() {
    //TODO: Read value from Store property;
    return '14:35';
}

const getSecondHourOperand = function() {
    //TODO: Read value from Store property;
    return '22:34';
}

const getOperationResult = function() {
    //TODO: Process the operation;
    return '13:33';
}

const HourContainer = function() {

    //TODO: Read this values from Store property.
    let isSumOperation = true;
    let isOperatorInputted = false;

    return (
        <HourGroup 
            firstOperand={getFirstHourOperand()}
            secondOperand={getSecondHourOperand()}
            secondOperandColor={getSecondHourColor()}
            result={getOperationResult()}
         />
    );
};

export default HourContainer;