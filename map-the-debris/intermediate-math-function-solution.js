// Map the Debris
// Intermediate Solution
// The array will contain the object in the format 
// {name: 'name', avgAlt: 'avgAlt'}

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // Looping through each key in arr object
    for (var prop in arr) {
        // Rounding off the orbital period value
        var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
        // Deleting the avgAlt property
        delete arr[prop].avgAlt
        // Adding orbital period property
        arr[prop].orbitalPeriod = orbitalPer;
    }

    return arr;
}

console.log(orbitalPeriod([{
    name: 'sputnik',
    avgAlt: 35873.5553
}]));

// Solution
// [ { name: 'sputnik', orbitalPeriod: 86400 } ]