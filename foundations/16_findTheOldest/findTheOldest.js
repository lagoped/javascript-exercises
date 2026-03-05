const findTheOldest = function (persons) {
    
    return persons.reduce((acc, person) => {
        if (acc == undefined) {
            return person;
        }

        const accPersonAge = getPersonAge(acc);
        const currentPersonAge = getPersonAge(person);

        if (currentPersonAge > accPersonAge) {
            return person;
        }

        return acc;
    })
};


/*
{
  name: "Carly",
  yearOfBirth: 1942,
  yearOfDeath: 1970,
}
*/
function getPersonAge(person) {

    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    else {
        const currentYear = new Date().getFullYear()
        return currentYear - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
