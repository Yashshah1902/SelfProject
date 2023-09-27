/*
Write a JavaScript function that takes an array of integers as input and returns a new array containing only the prime numbers from the original array. Additionally, provide an explanation of your solution and any relevant assumptions made.
*/

(function(){

    // declaring array for generating 10 random Numbers
    let numbers = [];

    // generating Numbers using loop
    for(let i = 0; i < 10; i++){
        numbers.push(Math.floor(Math.random() * 100));
    }

    console.log(numbers);

    function isPrime(num) {
        for (let i = 2; num > i; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num > 1;
      }

    let outputArray = numbers.filter(isPrime);
    console.log(outputArray)

})()