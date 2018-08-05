// Symmetric Division
// Advanced Solution
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) equals [1, 4, 5]

function sym() {
    // Difference between set A and set B
    const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));

    // Spread operator to convert array like object to array
    const result = [...arguments]
        // Map elements in argument (array) to set
        .map(arr => new Set(arr))
        // Reduce it by uniting the difference(A, B) and difference(B, A)
        .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

    // Convert the set to array by using spread operator again
    return [...result];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

// Solution
// [ 1, 4, 5 ]