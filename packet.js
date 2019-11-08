// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
    let arr = [0, 1];

    if (n <= 2) return 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
console.log(fib(10));


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

let bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j <= n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([-15, 26, 99, -64, 2, 15, 0, 1, -37, 100]));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let newString = "";
    for (let i = someStr.length - 1; i >= 0; i--) {
        newString += someStr[i];
    }
    return newString;
}
console.log(reverseStr("BigBoi"));


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum) {
    if (someNum < 0)
        return -1;
    else if (someNum == 0)
        return 1;
    else {
        return (someNum * factorial(someNum - 1));
    }

}
console.log(factorial(4));


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.




// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (someNum == 0)
        return true;
    else if (someNum == 1)
        return false;
    else if (someNum < 0)
        return isEven(-someNum);
    else
        return isEven(someNum - 2);

}
console.log(isEven(67));


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr) {
    
    thePalin = someStr.split('').reverse().join('');
    if (thePalin == someStr)
    return true;
    else
    return false;
    
}
console.log(isPalindrome('omo'));
console.log(isPalindrome('NotAtAll'));


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *





// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj) {
   
    console.log(someObj);
}
traverseObject(John);


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr) {
console.log(someArr.length);
delete someArr[2];
console.log(someArr.length);
}



let someArr = [5, 10, 15, 20, 65, 45, 74, 44]
deleteElement(someArr);



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
    }
    let arrCaptn = [1, 3, 5, 9, 64, 44, 51, 21, 45, 66]
    spliceElement(arrCaptn);

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;

}
let john = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

function getPerson(name, age) {
    let person = {
        name: name, 
        age: age
    }
    return person;
}
let john = getPerson("John", 30);
console.log(john)