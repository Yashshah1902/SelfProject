// Author: Yash Shah
// Date: 20-09-2023

/*
Write a JavaScript function that iterates through an array of numbers and returns the sum of all even numbers in the array.
*/
// alert(`Welcome to JavaScript Practice session!`);

// (function(){
//         function answer1(){

//             // Code Below
//             // Generate Numbers in an Array
//             let randomNum = [];

//             for(let i = 0; i < 10; i++){
//                 randomNum.push(Math.floor(Math.random()*200));
//             }

//             console.log(randomNum);

//             // Get function for calculating even number from array
//             function evenNumCal(array){

//             let sum = 0;

//             for(let i = 0; i < array.length; i++){
//                 if(array[i] % 2 === 0){
//                     sum += array[i];
//                 }
//             }

//             return sum;
//     }

//     console.log(evenNumCal(randomNum));
//     }
// })()

/*
Code with DOM
*/

function question_1(){

    // alert("question 1 submitted!")
    // On Submit
    // 1.) Check the value of id="amount", .value
    let amount = document.querySelector('#amount').value;

    // let answer1 = document.querySelector('#requestQuestion_1');
    // answer1.innerHTML = `${amount}`; // Value Checked

    // 2.) Check the value of id="range", .value
    let range = document.querySelector('#range').value;

    

    // let answer1 = document.querySelector('#requestQuestion_1');
    // answer1.innerHTML = `${range}`; // Value Checked 
    
    // Getting task Printed
    let answer1 = document.querySelector('#requestQuestion_1');

    if (amount <= 0){
        answer1.innerHTML = `<br> Please input valid numbers <br>`;
        answer1.innerHTML += `"Come on Let's make it run"`;
    } else {
        answer1.innerHTML = `<br> The number of integers that are going to be generated: <b>${parseInt(amount)}</b> <br> The range that is going to generate the numbers is from <b> 0 to ${parseInt(range)} </b>.`;
        
        let randomNum = [];

        for(let i = 0; i < Number(parseInt(amount)); i++){
            randomNum.push(Math.floor(Math.random()* (Number(range) + 1)));
        }

        answer1.innerHTML += `<br>The numbers that are created according to the request are as follows: <br>`;

        console.log(randomNum);

        // Showing random Numbers
        answer1.innerHTML += `<b><i>${randomNum.join(", ")}</i></b>`;

        // Sum of Even Numbers
        let sum = 0;
        for(let x = 0; x < randomNum.length; x++){
            if(randomNum[x] % 2 === 0){
                sum += randomNum[x]
            }
        }

        answer1.innerHTML += `<br> The sum of even Numbers for this randomly generated number is: <b><i>${sum}</i></b>`;

    }
    


}