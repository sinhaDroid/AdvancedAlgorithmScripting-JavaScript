// Pairwise
// Intermediate Solution

function pairwise(arr, arg) {
    // Create empty array to keep the arrays we will add.
    var index = [];

    // Loop to check the first number.
    for (var a in arr) {
        // temporal first number.
        var temp = arr[a];

        // Second loop to check against the first number.
        for (var i = 1; i < arr.length; i++) {
            // temporal second number.
            var temp2 = arr[i];

            // Key element, this check to make sure that the numbers add to arg
            // also that the second index is greater than the first, and that neither
            // of those indices are already on the array.
            if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
                // if true then add both indices as integers then stop checking to avoid repeats.
                index.push(+a, +i);
                break;
            }
        }
    }

    // After the two loops are done, check if index is empty to return 0
    // or if it is not, then use Array.reduce(callbackFunc) to return the sum
    // of the numbers.
    if (index.length >= 1) {
        var addAll = function (a, b) {
            return a + b;
        };

        return index.reduce(addAll);
    } else
        return 0;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));

// Solution
// 11