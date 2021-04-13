//  #### Write your implementation of testing framework and assertion. Only after completing this go forward.

// #### Write two tests for the following functions using test framework assertion

// #### Add two number

// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework (try...catch) we learned in the testing framework video.

// #### Multiply two numbers

// 1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework (try...catch) we learned in the testing framework video.

//Assertion Library

function expect(actual) {
    return {
        toEqual: function(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeEqual: function(expected) {
            if(typeof actual !== expected) {
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    }
}

// Testing Framework

function test(message, callback) {
    try {
    callback();
    console.log('✅', message);
    } catch(error) {
    console.error(error);
    console.log("⚠️", message);
    }
}

function multiplyNumbers(numA, numB) {
    return numA * numB;
}

multiplyNumbers(2, 3); // 6
multiplyNumbers(2, 2); // 4
multiplyNumbers(2, 1); // 2
multiplyNumbers(2, 4); // 8
multiplyNumbers(2, 6); // 12

function multiplyNumbersTest(){
    result = multiplyNumbers(2,3);
    expected = 6;
    expect(result).toEqual(expected);
}

test('multiplies', () => {
    expect(multiplyNumbers(2,3).toBe(6))
});
