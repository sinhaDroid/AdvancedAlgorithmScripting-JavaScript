function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let balance = cash * 100 - price * 100;
    var allCash = true;

    change = cid.reduceRight(function (p, c, i) {
        var out = Math.min(balance - balance % values[i], c[1] * 100);
        balance -= out;
        if (out !== c[1] * 100) {
            allCash = false;
        }
        return out ? p.concat([
            [c[0], out / 100]
        ]) : p;
    }, []);
    let status;
    if (balance > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (allCash) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    return {
        status: status,
        change: change
    };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

let test1 = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(test1);

// Solution 1
// { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }


let test2 = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(test2);

// Solution 2
// { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }


let test3 = checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(test3);

// Solution 3
// { status: 'OPEN',
//   change:
//    [ [ 'TWENTY', 60 ],
//      [ 'TEN', 20 ],
//      [ 'FIVE', 15 ],
//      [ 'ONE', 1 ],
//      [ 'QUARTER', 0.5 ],
//      [ 'DIME', 0.2 ],
//      [ 'PENNY', 0.04 ] ] }


let test4 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

console.log(test4);

// Solution 4

// { status: 'INSUFFICIENT FUNDS', change: [] }

let test5 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

console.log(test5);

// Solution 5
// { status: 'INSUFFICIENT FUNDS', change: [] }

let test6 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

console.log(test6);

// Solution 6
// { status: 'CLOSED',
//   change:
//    [ [ 'PENNY', 0.5 ],
//      [ 'NICKEL', 0 ],
//      [ 'DIME', 0 ],
//      [ 'QUARTER', 0 ],
//      [ 'ONE', 0 ],
//      [ 'FIVE', 0 ],
//      [ 'TEN', 0 ],
//      [ 'TWENTY', 0 ],
//      [ 'ONE HUNDRED', 0 ] ] }
