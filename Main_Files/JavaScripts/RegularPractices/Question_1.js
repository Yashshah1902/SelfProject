// Author: Yash Shah
// Date: 20-09-2023

/*
Write a JavaScript function that iterates through an array of numbers and returns the sum of all even numbers in the array.
*/

// Code Below
// Generate Numbers in an Array
let randomNum = [];

for(let i = 0; i < 10; i++){
    randomNum.push(Math.floor(Math.random()*200));
}

console.log(randomNum);

// Get function for calculating even number from array
function evenNumCal(array){

    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            sum += array[i];
        }
    }

    return sum;

}

console.log(evenNumCal(randomNum))