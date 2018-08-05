// Make A Person
// Basic Solution
/*
Fill in the object constructor w/ the following methods below

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(second)
setFullName(firstAndLast)
*/

var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(' ')[0];
    }

    this.getLastName = function () {
        return fullName.split(' ')[1];
    }

    this.getFullName = function () {
        return fullName;
    }

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    }

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    }

    this.setFullName = function (name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName('Rick');
console.log(bob.getFirstName());
bob.setLastName('Vashneer');
console.log(bob.getLastName());

// Solution
// Bob Ross
// Bob
// Ross
// Rick
// Vashneer