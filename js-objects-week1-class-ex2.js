
/* A person named Alice is defined below. 
Add a method "greet" so this person can say hello. */

/* let person = {
    name: "Alice",
    age: 25,
    greet: function(){
        return "Hello everybody";
    }
};  */

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

/* console.log(`Expected result: Hello everybody. Actual result: ${person.greet()}`); */

/////////////////////////////////////////////////////////////////////

/* 
A person named Alice is defined below. 
Add a method "sayName" so this person can say their own name. 
Hint: use 'this' keyword to access the name property.
*/

/* 
let person = {
    name: "Alice",
    age: 25,
    sayName: function(){
        return "My name is " + this.name;
    }
}; */


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

/* console.log(`Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`);  */

//////////////////////////////////////////////////

/* 
The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!
*/


/* let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
        this.currentAddress = newAddress;
    },
    celebrateBirthday: function () {
        this.age = this.age + 1;
    }
}; */


/* 
DO NOT EDIT ANYTHING BELOW THIS LINE
*/


/* person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`); */

///////////////////////////////////////////////////////////////

/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/


/* let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend: function (newFriends){
        //this.friends = this.friends + "," + newFriends;
        this.friends.push(newFriends);
    }
}; */

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

/* person.makeFriend("Bob");

console.log(`Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`); */

//////////////////////////////////////////////////////////////////////////

/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.
insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,

    insertMoney: function (amount) {
        if (amount >= 3.00){
            return blackCoffee;
       } 
        if(amount >= 2.40 && amount < 3.00){
           return cappuccino;
       } 
        if (amount >= 1.50 && amount < 2.40){
            return blackCoffee;
        }
    },

    getCoffee: function (coffee) {
      return coffee;
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee('cappuccino')}`);

coffeeMachine.insertMoney(1.50);
console.log(`Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee('blackCoffee')}`);

coffeeMachine.insertMoney(4.00);
console.log(`Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);