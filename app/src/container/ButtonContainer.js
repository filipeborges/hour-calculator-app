import React from 'react';
import Button from '../components/Button';
import { addNumber, addOperator } from '../actions/action_creators';

const containerCss = {
    width: '152px',
    marginRight: 'auto',
    marginLeft: 'auto'
}

class ButtonContainer extends React.Component {

    getButtonRow(buttonTextRow) {

        let row = [];
        buttonTextRow.forEach(buttonText => {
            row.push(
                <Button text={buttonText} 
                    onClick={() => this.onClick(buttonText)} 
                />
            );
        });

        return (
            <div>{row}</div>
        );
    }

    onClick(buttonValue) {
        if(buttonValue === '+' || buttonValue === '-') {
            this.props.store.dispatch(addOperator(buttonValue));   
        } else {
            this.props.store.dispatch(addNumber(buttonValue));   
        }
    }

    render() {
        return (
            <div style={containerCss}>
                { this.getButtonRow(['1','2','3']) }
                { this.getButtonRow(['4','5','6']) }
                { this.getButtonRow(['7','8','9']) }
                { this.getButtonRow(['-','0','+']) }
            </div>
        );
    }
}

export default ButtonContainer;