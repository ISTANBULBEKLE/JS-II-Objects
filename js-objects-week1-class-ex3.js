/*Return the keys and values of the following object */

/* let capitalCities = {
  scotland: 'Edinburgh',
  kenya: 'Nairobi',
  australia: 'Canberra',
  canada: 'Ottawa'
};

let highScores = {
  55: 'Alistair',
  100: 'David',
  89: 'Hannah',
  34: ['Sergi', 'Frank'],
}; */

// ONLY EDIT BELOW HERE

/* let capitalCitiesKeys = Object.keys(capitalCities);
let highScoresKeys = Object.keys(highScores);

let capitalCitiesValues = Object.values(capitalCities);
let highScoresValues = Object.values(highScores); */

// ONLY EDIT ABOVE HERE

/* console.log(capitalCitiesKeys);
//prints [ 'scotland', 'kenya', 'australia', 'canada' ]
console.log(highScoresKeys)
//prints ['34, '55', '89', '100']
console.log(capitalCitiesValues);
//prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]
console.log(highScoresValues)
//prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah'] */

/////////////////////////////////////////////////////////////////

/*
You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.
You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.
*/

/* let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30
};

function upperCaseTheNames (name){
    return name.toUpperCase();
};  */

// ONLY EDIT BELOW THIS LINE

/* let mentorsNames = Object.keys(mentorsAges);

let mentorsNamedUppercased = mentorsNames.map(upperCaseTheNames); */

// ONLY EDIT ABOVE THIS LINE

/* console.log(mentorsNamedUppercased); */
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

////////////////////////////////////////////////////////////////////////////

/*
Objects very often contain other objects.
This exercise will give you practice in getting the keys of objects inside other objects.
Use the provided console.log statements below and follow the instructions above them.
*/

/* let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },
  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
}; */

// ONLY EDIT BELOW THIS LINE
// # 1
// prints [ 'glasgow', 'edinburgh' ]
/* console.log(Object.keys(storeBranches));
// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow));
// # 3
// prints [ 'head_intern', 'intern' ]
console.log(Object.keys(storeBranches.glasgow.interns));
// ONLY EDIT ABOVE THIS LINE */