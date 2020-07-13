/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/
let person1 = {
    name: "Alice",
    age: 25
};
let person2 = {
    name: "Bob",
    age: 30
};
let person3 = {
    name: "John",
    age: 20
};
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

function personYoungerThan28 (person){
  return person.age < 28;
}

let persons = [person1, person2, person3]; // Complete here
let personNames = persons.map(person => person.name); // Complete here
let personsYoungerThan28YearsOld = persons.filter(personYoungerThan28); // Complete here


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log("Question 1: array defined with 3 persons -> ",
    (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');
console.log("Question 2: array containing the person names -> ",
    (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');
console.log("Question 3: array containing the persons younger than 28 years old -> ",
    (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');


///////////////////////////////////////////////////////////////////////////////////

/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.
1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

l/* et destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};
let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};
let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};
let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};
let travelDestinations = [destination1, destination2, destination3, destination4]; */


/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

/* 
let destinationNamesWithin500Kms = // Complete here
let destinationNameReachableByFerry = // Complete here
let destinationNamesMoreThan300KmsAwayByTrain = // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

 */
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/* 
console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);
 */
/////////////////////////////////////////////////////////////////////////////////////////////


/*Answer below*/

/* let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"]
};
let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"]
};
let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"]
};
let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"]
};
let travelDestinations = [destination1, destination2, destination3, destination4];
function checkWithin500Kms(destination){
  return destination.distanceKms <= 500;
}
function getDestinationNames(destination){
  return destination.destinationName;
}
function getFerry(destination){
  return destination.transportations.includes("ferry");
}
function reachAbleTrain(destination){
  return destination.transportations.includes("train");
}
function moreThan300kn(destination){
  return destination.distanceKms >= 300;
} */
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/
/* let destinationNamesWithin500Kms = travelDestinations.filter(checkWithin500Kms).map(getDestinationNames);// Complete here
let destinationNameReachableByFerry = travelDestinations.filter(getFerry).map(getDestinationNames)// Complete here
let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(moreThan300kn).filter(reachAbleTrain).map(getDestinationNames)  */// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/* console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`); */