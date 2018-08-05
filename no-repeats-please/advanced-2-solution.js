// No Repeats Please
// Advanced Solution Part 2
// aab should return 2, because it has 6 total permutations

function permAlone(str) {
    var re = /(.)\1/;

    function pT(p, o) {
        if (o.length) {
            var sum = 0;
            for (let index = 0; index < p.length + 1; index++) {
                sum += pT(p.slice(0, index).concat(o[0]).concat(p.slice(index)), o.slice(1));
            }
            return sum;
        } else return !re.test(p.join(''));
    }
    return pT([], str.split(''));
}

console.log(permAlone("aab"));

// Solution
// 2