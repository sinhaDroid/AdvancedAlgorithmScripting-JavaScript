// Pairwise
// Advanced Solution

function pairwise(arr, arg) {
    // search array for elements that when paired, equal the second argument, then sum their indices
    // make a local copy of the arguments object so we don't modify it directly
    var pairArr = arr.slice();
    return pairArr.reduce(function (a, b, index) { // use native reduce to collect running total of summed indices
        var search = arg - b; // get difference of current item so we know what value will sum to arg

        // check if search value in rest of the array, but also make sure it doesn't match current search index
        if (pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index) {
            var total = index + pairArr.indexOf(search); // if found, add to the runnning total
            pairArr.splice(index, 1, NaN); // remove current index from the array
            pairArr.splice(pairArr.indexOf(search), 1, NaN); // remove the other matched element from the array
            return a + total; //return the running total back to reduce for next item
        }
        return a; // simply return previous total if no operations needed
    }, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));

// Solution
// 11