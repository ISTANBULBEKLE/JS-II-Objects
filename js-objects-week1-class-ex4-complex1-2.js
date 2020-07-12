/*
    Given the same "house" object again
    Follow the instructions below and then run the file 
    and make sure it outputs the correct results
*/

/* let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway"
    }
};

let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez"
};
 */

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
*/


// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'
/* 
house.currentOwner = newCurrentOwner;
house.previousOwners[1] = ["Stephen B."];
house.isForSale = false; */

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

/* console.log(
    "Did you correctly assign the new owner using the given variable?",
    `Expected result: true. Actual result: ${(house.currentOwner === newCurrentOwner)}`);
console.log(`Expected result: Claire M., Stephen B.Actual result: ${house.previousOwners.toString()}`);
console.log(`Expected result: false.Actual result: ${house.isForSale}`); */

////////////////////////////////////////////////////////////////////


/*
    Given the same "house" object again
    Write the code for the functions as per the description above them
*/

/* let kinningParkHouse = {
    address: "1 Kinning Park",
    price: 180000,
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
      email: "margaret@fake-emails.com"
    }
};

let parkAvenueHouse = {
    address: "50 Park Avenue",
    price: 195000,
    currentOwner: {
      firstName: "Marie",
      lastName: "McDonald",
      email: "marie.m@real-emails.com"
    }
}; */

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
*/


/* // returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
    return `${house.currentOwner.firstName} ${house.currentOwner.lastName}`;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return [house1.currentOwner.email, house2.currentOwner.email];
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  if (house1.price < house2.price){
    return house1.address;
  } else{
    return house2.address;
  }

} */


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/* console.log(`Expected result: Margaret Conway. Actual result: ${getOwnerFullName(kinningParkHouse)}`);
console.log(`Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(kinningParkHouse, parkAvenueHouse)}`);
console.log(`Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(parkAvenueHouse, kinningParkHouse)}`); */