// Inventory Update
// Advanced Solution
// [[2, "Item1 Name"], [3, "Item2 Name"], [67, "Item3 Name"], [7, "Item4 Name"]]

function updateInventory(arr1, arr2) {
    var flag = 0;
    arr2.forEach(function (item) {
        flag = 0;
        arr1.forEach(function (list) {
            // If the product is already present, increase the quantity
            if (item[1] === list[1]) {
                list[0] += item[0];
                flag = 1;
            }
        });
        // If not already present, add the product
        if (flag === 0)
            arr1.push(item);
    });

    // Return the sorted inventory in alphabetical order by product name
    return arr1.sort(function (a, b) {
        return a[1] > b[1] ? 1 : -1;
    });
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
//   [ 3, 'Half-Eaten Apple' ],
//   [ 5, 'Microphone' ],
//   [ 7, 'Toothpaste' ] ]