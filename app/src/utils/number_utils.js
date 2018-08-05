
const getTwoDigitNumberStr = function(number) {

    if(number !== undefined) {
        return number < 10 ? '0' + number : number + '';
    } else {
        console.log('Undefined number - getTwoDigitNumberStr()');
        return undefined;
    }
};

export { getTwoDigitNumberStr };