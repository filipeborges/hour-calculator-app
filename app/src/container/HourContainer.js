import React from 'react';
import HourTable from '../components/HourTable';
import Constants from '../constants/constants';

const getOperationResult = function() {
    //TODO: Process the operation;
    return '13:33';
}

class HourContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstOperandValue: '',
            secondOperandValue: '',
            isSumOperation: false,
            isOperatorInputted: false
        };

        this.props.store.subscribe(this.getStoreUpdateCallback());
    }

    getSecondHourColor(isOperatorInputted, isSumOperator) {
        if(isOperatorInputted) {
            return isSumOperator ? 'green' : 'red';
        } else {
            return undefined;
        }
    }

    getStoreUpdateCallback() {
        return (
            function() {
                let store = this.props.store.getState();

                this.setState({
                    firstOperandValue: store.firstOperandValue,
                    secondOperandValue: store.secondOperandValue,
                    isSumOperation: store.isSumOperation,
                    isOperatorInputted: store.isOperatorInputted
                });
            }
        ).bind(this);
    }

    getOperator(isOperatorInputted, isSumOperator) {
        if(isOperatorInputted) {
            if(isSumOperator) {
                return '+';
            } else {
                return '-';
            }
        } else {
            return undefined;
        }
    }

    isEqualVisible(currentState) {
        return Constants.VALID_HOUR_REGEX.test(currentState.secondOperandValue) &&
            currentState.isOperatorInputted;
    }

    render() {

        let secondRowColor = this.getSecondHourColor(
            this.state.isOperatorInputted, 
            this.state.isSumOperation
        );

        return (
            <HourTable 
                firstOperand={this.state.firstOperandValue}
                secondOperand={this.state.secondOperandValue}
                secondRowColor={secondRowColor}
                operator={this.getOperator(
                    this.state.isOperatorInputted,
                    this.state.isSumOperation
                )}
                isEqualVisible={this.isEqualVisible(this.state)}
                result={getOperationResult()}
            />
        );
    }

}

export default HourContainer;