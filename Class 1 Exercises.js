// ________________________________________________________________
// Math/ Numbers
// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.  What is the surface area for each of these pizzas?
// Declaring variables
const smallPizzaDiameter = 13;
const largePizzaDiameter = 17;
// Calculating radius
const smallPizzaRadius = smallPizzaDiameter / 2;
const largePizzaRadius = largePizzaDiameter / 2;
// Calculating areas and printing them
const smallPizzaArea = Math.PI * smallPizzaRadius ** 2;
console.log(smallPizzaArea);
const largePizzaArea = Math.PI * largePizzaRadius ** 2;
console.log(largePizzaArea);

// 2. What is the cost per square inch of each pizza?
// Declaring variables
const smallPizzaPrice = 16.99;
const largePizzaPrice = 19.99;
// Calculating price per square inch and printing them
const priceSmallSqIn = smallPizzaPrice / smallPizzaArea;
console.log(priceSmallSqIn);
const priceLargeSqIn = largePizzaPrice / largePizzaArea;
console.log(priceLargeSqIn);

// 3. Using the Math object, put together a code snippet that allows you to draw a random card with a value between 1 and 13 (assume ace is 1, jack is 11…)
const card = Math.floor(Math.random() * 13);
console.log(card);

// 4. Draw 3 cards and use Math to determine the highest card
// Drawing three cards and putting it into an array
const arrayRand = Array.from({length: 3}, () => Math.floor(Math.random() * 13));
console.log(arrayRand);
// Spread array then get the max value 
const maxArray = Math.max(...arrayRand);
console.log(maxArray);

// ________________________________________________________________
// Strings / Addresses
// 1. Create variables for firstName, lastName, streetAddress, city, state, and zipCode. Use this information to create a formatted address block that could be printed onto an envelope.
// Declaring variables
const firstName = "Bob";
const lastName = "Smith";
const streetAddress = "1225 Madison St";
const city = "Seattle";
const state = "WA";
const zipCode = "98104";
// Formatting variables into full address, then printing it out
const fullAddress = `${firstName} ${lastName} \n${streetAddress} \n${city}, ${state} ${zipCode}`;
console.log(fullAddress);
// 2. You are given a string in this format:
// firstName lastName
// streetAddress
// city, state zip
// Write code that is able to extract the first name from this string into a variable.  Hint: use indexOf, slice, and / or substring
const stringAddress = 'firstName lastName \nstreetAddress \ncity, state zip';
console.log(stringAddress);
const addressArray = stringAddress.split(" ");
console.log(addressArray)
const arrayFirst = addressArray[0]
console.log(arrayFirst)

// ________________________________________________________________
// Date
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
// Starting hint:
// const startDate = new Date(2020, 0, 1);
// Declaring variables
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
// Getting middle date and printing it
let midDate = new Date(endDate - (endDate.getTime() - startDate.getTime()) / 2);
console.log(`The middle date between ${startDate} and ${endDate} is ` + midDate);