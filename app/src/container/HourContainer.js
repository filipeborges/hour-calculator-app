import React from 'react';
import HourTable from '../components/HourTable';
import Constants from '../utils/constants';
import { getDateFromHour, getHourStrFromMillis } from '../utils/hour_utils';
import { getFormattedDateStr } from '../utils/date_utils';

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

    getOperationResult(currentState) {

        let isTimeToCalculateResult = this.isEqualVisible(currentState);

        if(isTimeToCalculateResult) {
            let firstOperandMillis = getDateFromHour(currentState.firstOperandValue)
                .getTime();
            let secondOperandMillis = getDateFromHour(currentState.secondOperandValue)
                .getTime();

            if(currentState.isSumOperation) {
                return getHourStrFromMillis(firstOperandMillis + secondOperandMillis);
            } else {
                return getHourStrFromMillis(firstOperandMillis - secondOperandMillis);
            }
            
        }

        return undefined;
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

    getFirstDate(currentState) {
        let firstOperandComplete = Constants.VALID_HOUR_REGEX
            .test(currentState.firstOperandValue);
        
        if(firstOperandComplete) {
            let date = new Date();
            
            return getFormattedDateStr(date.getDate(), date.getMonth() + 1, 
                date.getFullYear());
        }

        return '';
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
                result={this.getOperationResult(this.state)}
                firstDate={this.getFirstDate(this.state)}
                resultDate="(22/09/1990)"
            />
        );
    }

}

export default HourContainer;