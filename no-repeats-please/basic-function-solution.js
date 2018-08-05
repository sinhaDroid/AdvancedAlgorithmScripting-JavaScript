// No Repeats Please
// Basic Solution
// aab should return 2, because it has 6 total permutations

function permAlone(str) {
    // Create a regex to match repeated consecutive characters.
    var regex = /(.)\1+/g;

    // Split the string into an array of characters.
    var arr = str.split('');
    var permutations = [];
    var tmp;

    // Return 0 if str contains same character
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    // Function to swap variables content
    function swap(index1, index2) {
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    // Generate arrays of permutations using the algorithm.
    function generate(int) {
        if (int === 1)
            // Make sure to join the characters as we create the permutation arrays
            permutations.push(arr.join(''));
        else {
            for (let index = 0; index != int; ++index) {
                generate(int - 1);
                swap(int % 2 ? 0 : index, int - 1);
            }
        }
    }
    generate(arr.length);

    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function (string) {
        return !string.match(regex);
    });

    // Return how many have no repetitions
    return filtered.length;
}

console.log(permAlone("aab"));

// Solution
// 2