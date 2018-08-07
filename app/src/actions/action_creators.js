import Actions from './Actions';

const addNumber = function(inputtedNumber) {
    return {
        type: Actions.NUMBER_PRESSED,
        value: inputtedNumber
    };
};

const addOperator = function(inputtedOperator) {
    return {
        type: Actions.OPERATOR_PRESSED,
        value: inputtedOperator
    };
};

const clear = function() {
    return {
        type: Actions.CLEAR_PRESSED
    };
};

export { addNumber, addOperator, clear };