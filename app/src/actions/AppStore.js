import { createStore } from 'redux';
import Actions from './Actions';

    //TODO: Implement
    /*
        - Some place needs to subscribe to store update;
        - This place which subscribed will be responsible for
        get the 'currentOperandValue' from the store, and check if this value
        needs to go to 'firstOperandValue' or 'secondOperandValue'.
        - This place will have access to all store state, so it can do
        this behavior.
        - This place needs to clean the 'currentOperandValue' if 
        the fifth number is inputted.
    */

const initialState = {
    firstOperandValue: '',
    secondOperandValue: '',
    isSumOperation: false,
    isOperatorInputted: false
};

const handleInputtedNumber = function(currentState, inputValue) {

    let validHourRegex = /^\d{2}:\d{2}$/;

    let firstOperandReceivesValue = !validHourRegex.test(currentState.firstOperandValue);
    let secondOperandReceivesValue = !validHourRegex.test(currentState.secondOperandValue);

    let stateToReturn = firstOperandReceivesValue || secondOperandReceivesValue ?
        Object.assign({}, currentState) : currentState;

    let newOperandValue;

    if(firstOperandReceivesValue) {
        
        newOperandValue = currentState.firstOperandValue.length == 2 ?
            currentState.firstOperandValue + ':' + inputValue :
            currentState.firstOperandValue + inputValue;

        stateToReturn.firstOperandValue = newOperandValue;

    } else if(secondOperandReceivesValue) {
        
        newOperandValue = currentState.secondOperandValue.length == 2 ?
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