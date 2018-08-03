import { createStore } from 'redux';
import Actions from './Actions';
import Constants from '../constants/constants';

const initialState = {
    firstOperandValue: '',
    secondOperandValue: '',
    isSumOperation: false,
    isOperatorInputted: false
};


const isAllowedInputOnFirstOperand = function(currentState) {
    return !Constants.VALID_HOUR_REGEX.test(currentState.firstOperandValue);
};

const isAllowedInputOnSecondOperand = function(currentState) {
    return !Constants.VALID_HOUR_REGEX.test(currentState.secondOperandValue) &&
        currentState.isOperatorInputted;
};

const handleInputtedNumber = function(currentState, inputValue) {

    let firstOperandReceivesValue = isAllowedInputOnFirstOperand(currentState);
    let secondOperandReceivesValue = isAllowedInputOnSecondOperand(currentState);

    let stateToReturn = firstOperandReceivesValue || secondOperandReceivesValue ?
        Object.assign({}, currentState) : currentState;

    let newOperandValue;

    if(firstOperandReceivesValue) {
        
        newOperandValue = currentState.firstOperandValue.length === 2 ?
            currentState.firstOperandValue + ':' + inputValue :
            currentState.firstOperandValue + inputValue;

        stateToReturn.firstOperandValue = newOperandValue;

    } else if(secondOperandReceivesValue) {
        
        newOperandValue = currentState.secondOperandValue.length === 2 ?
            currentState.secondOperandValue + ':' + inputValue :
            currentState.secondOperandValue + inputValue;

        stateToReturn.secondOperandValue = newOperandValue;
    }

    return stateToReturn;
};

const handleInputtedOperator = function(currentState, inputValue) {

    let stateToReturn = currentState.isOperatorInputted ?
        currentState : Object.assign({}, currentState);

    if(!currentState.isOperatorInputted) {

        stateToReturn.isOperatorInputted = true;
        stateToReturn.isSumOperation = inputValue === '+';
    }

    return stateToReturn;
}

const reducer = function(state = {}, action) {
    switch(action.type) {
        case Actions.NUMBER_PRESSED:
            return handleInputtedNumber(state, action.value);
        case Actions.OPERATOR_PRESSED:
            return handleInputtedOperator(state, action.value);
        default:
            return state;
    }
};

const AppStore = createStore(reducer, initialState);

export default AppStore;