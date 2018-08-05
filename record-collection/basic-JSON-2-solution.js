// Record Collection
// Basic Solution Part 2

var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === '')
        delete collection[id][prop];
    else if (prop !== 'tracks')
        collection[id][prop] = value;
    else
        collection[id][prop].push(value);

    return collection;
}

console.log(updateRecords(2548, "album", "Loose Goose"));
console.log(updateRecords(2468, "artist", "Sum 21"));
console.log(updateRecords(1245, "artist", "Michael Jackson"));
console.log(updateRecords(5439, "album", "Hotel California"));

// Solution
/*
 { '1245': { artist: 'Robert Palmer', tracks: [] },
  '2468':
   { album: '1999',
     artist: 'Prince',
     tracks: [ '1999', 'Little Red Corvette' ] },
  '2548':
   { album: 'Loose Goose',
     artist: 'Bon Jovi',
     tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
  '5439': { album: 'ABBA Gold' } }
*/
/*
 { '1245': { artist: 'Robert Palmer', tracks: [] },
  '2468':
   { album: '1999',
     artist: 'Sum 21',
     tracks: [ '1999', 'Little Red Corvette' ] },
  '2548':
   { album: 'Loose Goose',
     artist: 'Bon Jovi',
     tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
  '5439': { album: 'ABBA Gold' } }
*/
/*
 { '1245': { artist: 'Michael Jackson', tracks: [] },
  '2468':
   { album: '1999',
     artist: 'Sum 21',
     tracks: [ '1999', 'Little Red Corvette' ] },
  '2548':
   { album: 'Loose Goose',
     artist: 'Bon Jovi',
     tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
  '5439': { album: 'ABBA Gold' } }
*/
/*
 { '1245': { artist: 'Michael Jackson', tracks: [] },
  '2468':
   { album: '1999',
     artist: 'Sum 21',
     tracks: [ '1999', 'Little Red Corvette' ] },
  '2548':
   { album: 'Loose Goose',
     artist: 'Bon Jovi',
     tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
  '5439': { album: 'Hotel California' } }
*/