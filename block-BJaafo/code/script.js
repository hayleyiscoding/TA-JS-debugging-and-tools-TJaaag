
// #### Get full name

// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
// 2. After writing the function write two tests for above function
// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?


function getFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

let resultOne = getFullName('Arya', 'Stark');

let expectedOne = 'AryaStark';

if (resultOne !== expectedOne) {
    throw new Error(`${resultOne} is not equal to ${expectedOne}`)
}

let resultTwo = getFullName('Hayley', 'Wood');

let expectedTwo = 'Hayley Wood';

if (resultTwo !== expectedTwo) {
    throw new Error(`${resultTwo} is not equal to ${expectedTwo}`)
}

// no, we don't see the output of the second test

// #### Calculate total amount

// 1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
// 2. Write two tests for the above function
// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?

function getTotalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

let resultOne = getTotalAmount(100, 0.10);

let expectedOne = 1101;

if (resultOne !== expectedOne) {
    throw new Error(`${resultOne} is not equal to ${expectedOne}`)
}

let resultTwo = getTotalAmount(200, 0.1);

let expectedTwo = 220;

if (resultTwo !== expectedTwo) {
    throw new Error(`${resultTwo} is not equal to ${expectedTwo}`)
}

// no, we don't see the output of the second test
