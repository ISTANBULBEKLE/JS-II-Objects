/*Return the keys and values of the following object
*/

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
  34: ['Sergi', 'Frank',]
}; */

// ONLY EDIT BELOW HERE

/* let capitalCitiesKeys = ;
let highScoresKeys = ;
let capitalCitiesValues = ;
let highScoresValues = ;
// ONLY EDIT ABOVE HERE
console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]
console.log(highScoresKeys)
// prints ['34, '55', '89', '100']
console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]
console.log(highScoresValues)
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah'] */

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
 */
// ONLY EDIT BELOW THIS LINE

/* let mentorsNames = ;
let mentorsNamedUppercased = ;
// ONLY EDIT ABOVE THIS LINE
console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ] */

/////////////////////////////////////////////////////////////////////

/*
Objects very often contain other objects.
This exercise will give you practice in getting the keys of objects inside other objects.
Use the provided console.log statements below and follow the instructions above them.
*/
/* 
let storeBranches = {
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

/* // ONLY EDIT BELOW THIS LINE
// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log();
// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log();
// # 3
// prints [ 'head_intern', 'intern' ]
console.log();
// ONLY EDIT ABOVE THIS LINE */

///////////////////////////////////////////////////////////////

/* You are given an object of student names and grades
Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
Try to use both methods shown above to achieve this
 */

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (let key in studentGrades) {
  if(studentGrades[key] > 18){
  console.log(`${key.toUpperCase()} ${studentGrades[key]}`)
  }

// Prints
// TOM - 20
// ABDUL - 19