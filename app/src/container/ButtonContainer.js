import React from 'react';
import Button from '../components/Button';

const getButtonRow = function(buttonTextRow) {

    let row = [];
    buttonTextRow.forEach(buttonText => {
        row.push(<Button text={buttonText} />);
    })

    return (
        <div>{row}</div>
    );
};

const containerCss = {
    width: '152px',
    marginRight: 'auto',
    marginLeft: 'auto'
}

const ButtonContainer = function(props) {
    return (
        <div style={containerCss}>
            { getButtonRow(['1','2','3']) }
            { getButtonRow(['4','5','6']) }
            { getButtonRow(['7','8','9']) }
            { getButtonRow(['-','0','+']) }
        </div>
    );
};

export default ButtonContainer;