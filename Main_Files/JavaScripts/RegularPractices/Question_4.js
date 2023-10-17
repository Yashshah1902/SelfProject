/*
Write a JavaScript function that calculates the sum of all the numbers in an array.
*/

// (function (){

    // function sumOfArray(array){
    // let sum = 0;

    // for(let i =0; i < array.length; i++){
    //     sum += array[i];
    // }
    
    // return sum`z;
    // }

    // let myarray = [];
    // for(let i =0; i < 10; i++){
    //     myarray.push(Math.floor(Math.random() * 100 ));
    // }
    // console.log(myarray);
    // console.log(sumOfArray(myarray));

    // Using forEach Method

//     function sumOfArray(array) {
//         let sum = 0;
        
//         array.forEach(element => {
//             sum += element
//         });

//         return sum;
//     }

//     let myarray = [];

//     myarray = new Array(10).fill().map(() => Math.floor(Math.random() * 100)); // using .map() to push random numbers

// for(let i =0; i < 10; i++){
//    myarray.push(Math.floor(Math.random() * 100 ));
//}
//     console.log(myarray);
//     console.log(sumOfArray(myarray));

// })()

/*
Question 4:
Write a JavaScript function that calculates the sum of all the numbers in an array.
*/

/*
Write a JavaScript function that calculates the sum of all the numbers in an array.
*/

// <div id="Question_4"></div>

let question4Div = document.querySelector('#Question_4');
question4Div.innerHTML = `<hr> <h2>Four operators Calculator (+, -, *, /)</h2>`;
question4Div.innerHTML += `<b><u> Question No.4: </u></b>`;
question4Div.innerHTML += `This Program will calculate the numbers received by you and also getting your input on what operation you want to do with those numbers and gives total value of the operation performed`;
question4Div.innerHTML += `<br> <b>"Let's Begin!!"</b> <br><br>`;

// 1. Please enter the numbers that user wants to calculate
// 2. Please input the operation
// 3. Please get the functions
question4Div.innerHTML += `
    <form id="question4">
        <label> Please input your numbers seperate by commas [Eg: 1,21,100] (Spaces after comma sould be ok) </label><br>
        <textarea rows="2" cols="50" id="numbers" onclick="clearNumbers()"> 1, 2, 3, 4</textarea><br><br>
        <label> Please input the sign of the operator that you want to perform </label><br>
        <input type"text" id="operator" value="+" onclick="clearOperator()" /><br><br>
        <label> Your total Vaule with selected operation </label><br><br>
        <button id="buttonNo4" onclick="question_4()"> Submit </button>
        <button id="resetq4" onclick="resetq4()"> Reset </button> <br>
    </form>
    `;
question4Div.innerHTML += `<div id="requestQuestion_4"></div>`;
question4Div.innerHTML += `<hr>`;

// Button and Area Functions

function clearNumbers(){
    document.getElementById("numbers").value = "";
}

function clearOperator(){
    document.getElementById("operator").value ="";
}

function resetq4(){
    const defaultNumbers = [1, 2, 3, 4];
    const defaultOperator = `+`;
    document.getElementById('sentenceArea').value = defaultNumbers;
    document.getElementById('wordArea').value= defaultOperator;
}

// button event listner
document.getElementById("buttonNo4").addEventListener("click", () => buttonNo4.innerHTML = 'Submitted');

function question_4(){
    let numbersValue = document.querySelector('#numbers').value;
    console.log(`Your Numbers Value = ${numbersValue}`);
    
}