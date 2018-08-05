// Exact Change
// Basic Solution Part 1
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
    var change = cash - price;

    // Transform CID array intro drawer object
    var register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {
        total: 0
    });

    // Handle exact change
    if (register.total < change)
        return 'Insufficient Funds';

    // Loop through the denominations array
    var change_arr = denom.reduce(function (acc, curr) {
        var value = 0;
        // While there is still money of this type in drawer
        // And while the denomination is larger than in the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }

        // Add this denomination to the output only if was used.
        if (value > 0)
            acc.push([curr.name, value]);
        // Return the current change array
        return acc;
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string 'Insufficient Funds'
    if (change_arr.length < 1 || change > 0)
        return 'Insufficient Funds';

    // Here is your change
    return change_arr;
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