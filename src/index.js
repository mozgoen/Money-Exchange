// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let objectOfCurrency = {};

    if (currency < 1) {
        return objectOfCurrency;
    }

    if (currency > 10000) {
        objectOfCurrency.error = "You are rich, my friend! We don't have so much coins for exchange";
        return objectOfCurrency;

    }

    let firstDivision = currency / 50;
    let moduloOne = 0;


    if (firstDivision >= 1) {
        objectOfCurrency["H"] = Math.floor(firstDivision);
        moduloOne = Math.round(currency - 50 * objectOfCurrency["H"]);
    } else {
        moduloOne = currency;
    }

    let secondDivision = moduloOne / 25;
    let moduloTwo = 0;

    if (secondDivision >= 1) {
        objectOfCurrency["Q"] = Math.floor(secondDivision);
        moduloTwo = Math.round(moduloOne - 25 * objectOfCurrency["Q"]);
    } else {
        moduloTwo = moduloOne;
    }

    let thirdDivision = moduloTwo / 10;
    let moduloThree = 0;

    if (thirdDivision >= 1) {
        objectOfCurrency["D"] = Math.floor(thirdDivision);
        moduloThree = Math.round(moduloTwo - 10 * objectOfCurrency["D"]);
    } else {
        moduloThree = moduloTwo;
    }

    let fourthDivision = moduloThree / 5;
    let moduloFour = 0;

    if (fourthDivision >= 1) {
        objectOfCurrency["N"] = Math.floor(fourthDivision);
        moduloFour = Math.round(moduloThree - 5 * objectOfCurrency["N"]);
    } else {
        moduloFour = moduloThree;
    }

    if (moduloFour !== 0) {
        objectOfCurrency["P"] = Math.floor(moduloFour);
    }

    return objectOfCurrency;
}
