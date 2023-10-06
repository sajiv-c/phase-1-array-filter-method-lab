const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' 
    },
    {
      name: 'Sammy',
      hometown: 'New York' 
    },
    {
      name: 'Sally',
      hometown: 'Cleveland' 
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles' 
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' 
    }
];

const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, nameInput) {
    return arr.filter((el) => el.toLowerCase() === nameInput.toLowerCase());
    
        // if(nameValues == nameInput) {
        //     return nameValues.name;
        //     console.log(nameValues.value);
        // }
        // else {
        //     return([0]);
        // }
}

function fuzzyMatch(arr, letters) {
    return arr.filter((el) => el.slice(0, letters.length) === letters);
}

function matchName(arr, name) {
    return arr.filter((el) => el['name'] === name);
}