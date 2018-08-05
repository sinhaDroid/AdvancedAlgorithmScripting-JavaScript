// Symmetric Division
// Basic Solution
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) equals [1, 4, 5]

function sym() {
    var args = [];
    for (let index = 0; index < arguments.length; index++) {
        args.push(arguments[index]);
    }

    function symDiff(arr1, arr2) {
        var result = [];

        arr1.forEach(element => {
            if (arr2.indexOf(element) < 0 && result.indexOf(element) < 0)
                result.push(element);
        });

        arr2.forEach(element => {
            if (arr1.indexOf(element) < 0 && result.indexOf(element) < 0)
                result.push(element);
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

// Solution
// [ 1, 4, 5 ]