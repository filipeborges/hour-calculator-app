import React from 'react';
import { HourDisplay, OperatorDisplay } from './HourOperatorDisplay';
import DateDisplay from './DateDisplay';
import Button from './Button';

const hrCss = {
    height: '2px',
    backgroundColor: '#000'
};

const getTableCss = function(isClearButtonVisible) {
    return {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '18.8em',
        paddingRight: isClearButtonVisible ? undefined : '20px'
    };
};

const HourTable = function(props) {

    let equalElement = props.isEqualVisible ? 
        <OperatorDisplay text={'='} containerCss={{ float: 'left' }} /> : undefined;


    let line = props.isLineVisible ?
        <hr style={hrCss}/> : undefined;

    let clearButton = props.isClearVisible ?
        <Button text="X" onClick={props.clearOnClick} /> : undefined;

    return (
        <table style={getTableCss(props.isEqualVisible)}>
            <thead />
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <DateDisplay dateStr={props.firstDate} />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <HourDisplay text={props.firstOperand} />
                    </td>
                    <td>
                        <span style={ { float: 'right' } }>
                            { clearButton }
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span style={ { 
                            width: '3em',
                            display: 'inline-block'
                         } }>
                            <OperatorDisplay text={props.operator}
                                textColor={props.secondRowColor} 
                            />
                        </span>
                    </td>
                    <td>
                        <HourDisplay text={props.secondOperand} 
                            textColor={props.secondRowColor}
                        />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan='2'>{line}</td>
                </tr>
                <tr>
                    <td>
                        {equalElement}
                    </td>
                    <td>
                        <HourDisplay text={props.result} textColor="blue" />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <DateDisplay dateStr={props.resultDate} textColor="blue" />
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default HourTable;