// Map the Debris
// Advanced Solution
// The array will contain the object in the format 
// {name: 'name', avgAlt: 'avgAlt'}

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // Looping through each key in arr object
    arr.forEach(function (item) {
        // Calculate the orbital period value
        var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        // Deleting the avgAlt property
        delete item.avgAlt
        // Adding orbital period property
        item.orbitalPeriod = tmp;
    });

    return arr;
}

console.log(orbitalPeriod([{
    name: 'sputnik',
    avgAlt: 35873.5553
}]));

// Solution
// [ { name: 'sputnik', orbitalPeriod: 86400 } ]