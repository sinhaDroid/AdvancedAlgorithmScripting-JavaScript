// Exact Change
// Basic Solution Part 3
/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05],
["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
*/

// Create an object which holds the denomonations and their values
var denom = [{
        name: 'ONE HUNDRED',
        val: 100.00
    },
    {
        name: 'TWENTY',
        val: 20.00
    },
    {
        name: 'TEN',
        val: 10.00
    },
    {
        name: 'FIVE',
        val: 5.00
    },
    {
        name: 'ONE',
        val: 1.00
    },
    {
        name: 'QUARTER',
        val: 0.25
    },
    {
        name: 'DIME',
        val: 0.10
    },
    {
        name: 'NICKEL',
        val: 0.05
    },
    {
        name: 'PENNY',
        val: 0.01
    },
];

function checkCashRegister(price, cash, cid) {
    // declare and initialize variables
    var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let change = Math.round(((cash - price) * 100));
    let value = 0,
        changeRecord = [];

    // convert all float to integers due to floating point number issue
    cid.forEach(el => el[1] = Math.round(el[1] * 100));

    // helper function to check if sufficient cash for change is in the drawer
    function enoughFunds(cid) {
        var sum = cid.filter((el, i) => change >= currency[i]);
        return sum.reduce((a, b) => {
            return a + b[1];
        }, 0);
    }

    // Actual program/control flow starts here
    if (enoughFunds(cid) < change)
        return "Insufficient Funds";
    else if (enoughFunds(cid) === change)
        return "Closed";
    else {
        for (let index = cid.length - 1; index > -1; index--) {
            value = 0;
            while (cid[index][1] > 0 && change >= currency[index]) {
                // Update everything as long as condition is true
                change -= currency[index];
                cid[index][1] -= currency[index];
                // Value keeps tracks of the amount of each currency unit as charge
                value += currency[index];
            }
            if (value)
                changeRecord.push([cid[index][0], value]);
        }
    }

    // Divide each array by 100 to display a proper money format
    changeRecord.forEach(el => el[1] = (el[1] / 100));
    return changeRecord;
}

console.log(checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]));

// Solution
// [ [ 'QUARTER', 0.5 ] ]