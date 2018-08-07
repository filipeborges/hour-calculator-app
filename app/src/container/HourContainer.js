import React from 'react';
import HourTable from '../components/HourTable';
import Constants from '../utils/constants';
import { getHourStrFromMillis } from '../utils/hour_utils';
import { getFormattedDateStr } from '../utils/date_utils';

class HourContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstOperandValue: '',
            secondOperandValue: '',
            isSumOperation: false,
            isOperatorInputted: false,
            resultDate: undefined
        };

        this.props.store.subscribe(this.getStoreUpdateCallback());
    }

    getOperationResult(currentState) {

        if(currentState.resultDate) {
            return getHourStrFromMillis(currentState.resultDate.getTime());
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
                    isOperatorInputted: store.isOperatorInputted,
                    resultDate: store.resultDate
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
            
            return getFormattedDateStr(date.getDate(), date.getMonth(), 
                date.getFullYear());
        }

        return '';
    }

    getResultDate(currentState) {
        return currentState.resultDate !== undefined ? getFormattedDateStr(
            currentState.resultDate.getDate(),
            currentState.resultDate.getMonth(),
            currentState.resultDate.getFullYear()
        ) : currentState.resultDate;
    }

    render() {

        let secondRowColor = this.getSecondHourColor(
            this.state.isOperatorInputted, 
            this.state.isSumOperation
        );

        let isEqualVisible = this.isEqualVisible(this.state);

        return (
            <HourTable 
                firstOperand={this.state.firstOperandValue}
                secondOperand={this.state.secondOperandValue}
                secondRowColor={secondRowColor}
                operator={this.getOperator(
                    this.state.isOperatorInputted,
                    this.state.isSumOperation
                )}
                isEqualVisible={isEqualVisible}
                result={this.getOperationResult(this.state)}
                firstDate={this.getFirstDate(this.state)}
                resultDate={this.getResultDate(this.state)}
                isLineVisible={isEqualVisible}
            />
        );
    }

}

export default HourContainer;