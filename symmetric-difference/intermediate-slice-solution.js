// Symmetric Division
// Intermediate Solution
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) equals [1, 4, 5]

function sym() {
    // Convert the argument object into proper array
    var args = Array.prototype.slice.call(arguments);

    // Return the symmetric difference of two arrays
    var getDiff = function (arr1, arr2) {
        // Return items in arr1, that don't exist in arr2
        function filterFunction(arr1, arr2) {
            return arr1.filter(function (item) {
                return arr2.indexOf(item) === -1;
            });
        }
        // Run filter function on each array against the other
        return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    };

    // Reduce all arguments getting the difference of them
    var symArray = args.reduce(getDiff, []);

    // Run filter function to get the unique values
    var unique = symArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });

    return unique;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

// Solution
// [ 1, 4, 5 ]