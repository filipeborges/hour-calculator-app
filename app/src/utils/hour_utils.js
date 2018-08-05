import Constants from './constants';

const getDateFromHour = function(hourStr) {
    let date = new Date(0);
    
    let hour = getHourFraction(hourStr);
    let minute = getMinuteFraction(hourStr);

    if(hour !== undefined && minute !== undefined) {
        date.setHours(
            date.getHours() + Number.parseInt(hour, 10), 
            date.getMinutes() + Number.parseInt(minute, 10)
        );
    } else {
        console.log('Cannot get date from hour - getDateFromHour()');
    }

    return date;
};

const getTimeFraction = function(hourStr, isHourFraction) {

    let isHourStrValid = hourStr !== undefined && 
        Constants.VALID_HOUR_REGEX.test(hourStr);

    if(isHourStrValid) {
        
        let colonIndex = hourStr.indexOf(':');
        if(isHourFraction) {
            return hourStr.substring(0, colonIndex);
        } else {
            return hourStr.substring(colonIndex + 1);    
        }
    }

    return undefined;
}

const getMinuteFraction = function(hourStr) {

    let isHourFraction = false;
    return getTimeFraction(hourStr, isHourFraction);
};

const getHourFraction = function(hourStr) {

    let isHourFraction = true;
    return getTimeFraction(hourStr, isHourFraction);
};

const getHourStrFromMillis = function(millis) {
    let date = new Date(0);
    date = new Date(millis);
    return (date.toTimeString()).substring(0, 5);
}

export { getDateFromHour, getHourStrFromMillis };