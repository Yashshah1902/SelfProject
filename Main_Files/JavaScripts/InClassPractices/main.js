/*
Problem 1: 
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
Criterias:
convertCtoF(0) should return a number
convertCtoF(-30) should return a value of -22
convertCtoF(-10) should return a value of 14
convertCtoF(0) should return a value of 32
convertCtoF(20) should return a value of 68
convertCtoF(30) should return a value of 86
*/

// Solution 1:

const convertCtoF = (celsius) => {
    let fahrenheit;
    fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(convertCtoF(30));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10)); 
console.log(convertCtoF(0)); 
console.log(convertCtoF(20)); 

/*
Problem 2: 
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
Criterias: 
reverseString("hello") should return a string.
reverseString("hello") should return the string olleh.
reverseString("Howdy") should return the string ydwoH.
reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/

// Solution 2:
const reverseString = (str) => {
    return str.split('')
              .reverse()
              .join('');
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));

/*
Problem 3:
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

Criterias:
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

// Solution 3:
const factorialize = (num) => {
    let product = 1;
    for (let x = 1; x <= num; x++) {
        product *= x;
    }
    return product;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));

/*
Problem 4:
Return the length of the longest word in the provided sentence.
Your response should be a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

// Solution 4:
const findLongestWordLength = (str) => {
    let splitedArray = str.split(' ');
    // console.log(splitedArray);
    let numArray = splitedArray.map((word) => {
        return word.length;
    })
    // console.log(numArray);
    // Find the highest Number
    let highestNum = Math.max(...numArray);

    return highestNum;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

/*
Problem 5:
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
Criteria:
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
*/

// Solution 5:
const largestOfFour = (arr) => {
    let findingLargestOfFour = arr.map((element) => {
        return element.reduce((max, current) => max > current ? max : current);
    })
    return findingLargestOfFour;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

/*
Problem 6:
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Criteria: 
confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "sage") should return false.
confirmEnding("Open sesame", "game") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
confirmEnding("Abstraction", "action") should return true.
Your code should not use the built-in method .endsWith() to solve the challenge.
*/

// Solution 6:
const confirmEnding = (str, target) => {
    let splitter = str.split(' ');
    let lastWord;
    if(splitter.length > 1 ){
        lastWord = splitter[splitter.length-1];
    } else {
        lastWord = splitter[0];
    }

    // Checking lastword matching with the target,
    return lastWord.includes(target);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

/*
Problem 7:
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
Criteria:
repeatStringNumTimes("*", 3) should return the string ***.
repeatStringNumTimes("abc", 3) should return the string abcabcabc.
repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
repeatStringNumTimes("abc", 1) should return the string abc.
repeatStringNumTimes("*", 8) should return the string ********.
repeatStringNumTimes("abc", -2) should return an empty string ("").
The built-in repeat() method should not be used.
repeatStringNumTimes("abc", 0) should return "".
*/

// Solution 7:
const repeatStringNumTimes = (str, num) => {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";       
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));

/*
Problem 8:
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
Criteria:
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-", 1) should return the string A....
truncateString("Absolutely Longer", 2) should return the string Ab....
*/

// Solution 8:
const truncateString = (str, num) => {
    let spliced = str.slice(0, num)
    return num >= str.length ? str : spliced+"...";
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

/*
Problem 9:
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
Criteria:
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

// Solution 9:
const findElement = (arr, func) => {
    return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

/*
Problem 10:
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
Criteria:
booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/

// Solution 10:
const booWho = (bool) => {
    return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));

/*
Problem 11:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
Criteria:
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/

// Solution 11:
const titleCase = (str) => {
    let splitter = str.split(' ');
    console.log(splitter);
    let returnStr = splitter.map((word) => {
        return word.slice(0,1).charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return returnStr.join(' ');
}
  
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*
Problem 12:
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
Criteria:
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.
*/

// Solution 12:
const frankenSplice = (arr1, arr2, n) => {
    // Splice the Number
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

/*
Problem 13:
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
Criteria:
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
You should not mutate arr.
*/

// Solution 13:
const bouncer = (arr) => {
    let filteredArr = arr.filter(Boolean);
    return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

/*
Problem 14:
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
Criteria:
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([40, 60], 50) should return a number.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([3, 10, 5], 3) should return a number.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([5, 3, 20, 3], 5) should return a number.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 20, 10], 19) should return a number.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([2, 5, 10], 15) should return a number.
getIndexToIns([], 1) should return 0.
getIndexToIns([], 1) should return a number.
*/

// Solution 14:
const getIndexToIns = (arr, num) => {
    let returnIndex = arr.forEach(number => {
        
    });
    return returnIndex;
}

console.log(getIndexToIns([40, 60], 50));