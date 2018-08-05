import { getTwoDigitNumberStr } from './number_utils';

const getFormattedDateStr = function(dateDay, dateMonth, dateFullYear) {

    if(dateDay !== undefined && dateMonth !== undefined && 
        dateFullYear !== undefined) {

            return '(' +
                getTwoDigitNumberStr(dateDay) + '/' +
                getTwoDigitNumberStr(dateMonth + 1) + '/' +
                dateFullYear +
            ')';
    } else {
        console.log('Undefined parameter - getFormattedDateStr()');
        return undefined;
    }
};

export { getFormattedDateStr };
