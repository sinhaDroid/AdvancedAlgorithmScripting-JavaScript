// Pairwise
// Basic Solution Part 1

function pairwise(arr, arg) {
    // Create an empty to keep the arrays we will add.
    var index = [];

    // Loop to check the first number.
    for (var a in arr) {
        // Temporal first number
        var temp = arr[a];

        // Second loop to check against the first number.
        for (let i = 0; i < arr.length; i++) {
            // Temporal second number
            var temp2 = arr[i];

            if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 &&
                index.indexOf(+i) === -1) {
                // If true then add both indices as integers.
                // then stop checking to avoid repeats
                index.push(+a, +i);
                break;
            }
        }
    }

    // After the two loop are done, check if index is empty to return 0
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