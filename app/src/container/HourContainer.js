import React from 'react';
import HourTable from '../components/HourTable';

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

const getOperator = function() {
    //TODO: Read value from Store property;
    return '+';
}

const isEqualVisible = function() {
    //TODO: Implement
    return true;
}

const HourContainer = function() {

    //TODO: Read this values from Store property.
    let isSumOperation = false;
    let isOperatorInputted = false;

    return (
        <HourTable 
            firstOperand={getFirstHourOperand()}
            secondOperand={getSecondHourOperand()}
            secondOperandColor={getSecondHourColor(isOperatorInputted, isSumOperation)}
            operator={getOperator()}
            isEqualVisible={isEqualVisible()}
            result={getOperationResult()}
         />
    );
};

export default HourContainer;