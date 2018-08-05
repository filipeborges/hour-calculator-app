import React from 'react';
import { HourDisplay, OperatorDisplay } from './HourOperatorDisplay';
import DateDisplay from './DateDisplay';

const hrCss = {
    height: '2px',
    backgroundColor: '#000'
};

const tableCss = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: '20px'
};

const HourTable = function(props) {

    let equalElement = props.isEqualVisible ? 
        <OperatorDisplay text={'='} containerCss={{ float: 'left' }} /> : undefined;

    return (
        <table style={tableCss}>
            <thead />
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <HourDisplay text={props.firstOperand} />
                    </td>
                    <td>
                        <DateDisplay dateStr={props.firstDate} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <OperatorDisplay text={props.operator}
                            textColor={props.secondRowColor} 
                        />
                    </td>
                    <td>
                        <HourDisplay text={props.secondOperand} 
                            textColor={props.secondRowColor}
                        />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan='2'><hr style={hrCss}/></td>
                </tr>
                <tr>
                    <td>
                        {equalElement}
                    </td>
                    <td>
                        <HourDisplay text={props.result} textColor="blue" />
                    </td>
                    <td>
                        <DateDisplay dateStr={props.resultDate} textColor="blue" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default HourTable;