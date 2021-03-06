// Exact Change
// Basic Solution Part 2
/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05],
["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
*/

function checkCashRegister(price, cash, cid) {
    const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let change = cash * 100 - price * 100;
    let allCash = true;

    let moneyback = cid.reduceRight(function (p, c, i) {
        let out = Math.min(change - change % values[i], c[1] * 100);
        change -= out;
        if (out !== c[1] * 100) {
            allCash = false;
        }
        return out ? p.concat([
            [c[0], out / 100]
        ]) : p;
    }, []);

    return change > 0 ? "Insufficient Funds" : allCash ? "Closed" : moneyback;
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