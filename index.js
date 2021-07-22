const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers() {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
    return function (b) { 
        return a * b;
    }
}
function fareDoubler(a) {
    return a * 2;
}
function fareTripler(a) {
    return a * 3;
}
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}