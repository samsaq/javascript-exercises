const findTheOldest = function (peopleArray) {
    return peopleArray.reduce(function (curOldest, curPerson) {
        let curOldestAge, curAge;
        const curYear = new Date().getFullYear();
        if('yearOfDeath' in curOldest)
        {
            curOldestAge = curOldest.yearOfDeath - curOldest.yearOfBirth;
        }
        else
        {
            curOldestAge = curYear - curOldest.yearOfBirth;
        }

        if('yearOfDeath' in curPerson)
        {
            curAge = curPerson.yearOfDeath - curPerson.yearOfBirth;
        }
        else
        {
            curAge = curYear - curPerson.yearOfBirth;
        }
        
        if (curAge > curOldestAge || isNaN(curOldestAge)) {
            return curPerson;
        }
        else {
            return curOldest;
        }
    });
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

//console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
