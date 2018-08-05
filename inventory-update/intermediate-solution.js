// Inventory Update
// Intermediate Solution
// [[2, "Item1 Name"], [3, "Item2 Name"], [67, "Item3 Name"], [7, "Item4 Name"]]

function updateInventory(arr1, arr2) {
    // Variable for location of product
    var index;
    var arrCurInvName = []; // Names of arr1's items
    var arrNewInvName = []; // Names of arr2's items

    // Same as using two for loops, this takes care of increasing the number of stock quantity
    arr1.map(function (item1) {
        return arr2.map(function (item2) {
            if (item1[1] === item2[1])
                item1[0] = item1[0] + item2[0]; // Increase number of stock
        });
    });

    // Get item's name for new inventory
    arr2.map(function (item) {
        arrCurInvName.push(item[1]);
    });

    // Add new inventory items to current inventory.
    arrNewInvName.map(function (item) {
        if (arrCurInvName.indexOf(item) === -1) {
            index = arrNewInvName.indexOf(item);
            arr1.push(arr2[index]);
        }
    });

    // Sort the array alphabetically using the second element of the array as base.
    arr1.sort(function (currItem, nextItem) {
        // Ternary function to avoid using if else
        return currItem[1] > nextItem[1] ? 1 : -1;
    });

    return arr1;
}

// Example inventory list
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));

// Solution
// [ [ 88, 'Bowling Ball' ],
//   [ 2, 'Dirty Sock' ],
//   [ 3, 'Hair Pin' ],
//   [ 5, 'Microphone' ] ]