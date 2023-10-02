// Author: Yash Shah
// Date: 20-09-2023

// Button event listner
document.getElementById("buttonNo1").addEventListener("click", () => buttonNo1.innerHTML = 'Submitted');

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
        let count = 0;
        for(let x = 0; x < randomNum.length; x++){
            if(randomNum[x] % 2 === 0){
                sum += randomNum[x];
                count++;
            }
        }
        answer1.innerHTML += `<br> The total number of even Numbers is: <b><i>${count}</i></b>`;
        answer1.innerHTML += `<br> The sum of even Numbers for this randomly generated number is: <b><i>${sum}</i></b>`;

    }
    


}

/* Question 2 */

(function(){
    let question2Div = document.querySelector('#Question_2');
    question2Div.innerHTML += `<hr><h2> Word Finder Tool</h2>`;
    question2Div.innerHTML += `<b><u>Question No.2: </u></b> </>`
    question2Div.innerHTML += `This Program will search a word inside a sentence, you would have option to have your own sentence and search for the word or mini-sentence`;
    question2Div.innerHTML += `<br> <b>"Let's have a search!!"</b> <br><br>`;
    question2Div.innerHTML += ` 
                            <form id="question2">
                            <label> Please input your sentence </label><br>
                            <textarea rows="3" cols="100" id="sentenceArea" onclick="clearAreaSen()">The sunsets by the beach are always breathtaking, painting the sky with vibrant shades of orange and pink.</textarea><br><br>
                            <label> Please input the word or mini sentece you want to search </label><br>
                            <textarea rows="1" cols="50" id="wordArea" onclick="clearAreaWord()">sun</textarea>
                            </form><br>
                            <button id="buttonNo2" onclick="question_2()"> Submit </button>
                            <button id="reset" onclick="reset()"> Reset </button> <br>
                            </form>
                            `;
    question2Div.innerHTML += `<div id="requestQuestion_2"></div>`;
    question2Div.innerHTML += `<hr>`;

})()

// Button and Area Functions

function clearAreaSen(){
    document.getElementById("sentenceArea").value = "";
}

function clearAreaWord(){
    document.getElementById("wordArea").value ="";
}

function reset(){
    const defaultSentence = `The sunsets by the beach are always breathtaking, painting the sky with vibrant shades of orange and pink.`;
    const defaultWord = `sun`;

    document.getElementById('sentenceArea').value = defaultSentence;
    document.getElementById('wordArea').value= defaultWord;
}

// button event listner
document.getElementById("buttonNo2").addEventListener("click", () => buttonNo2.innerHTML = 'Submitted');

function question_2(){

    let answer2 = document.querySelector('#requestQuestion_2');

    let sentence = document.getElementById('sentenceArea');
    let sentenceValue = (sentence.value).toLowerCase();

    // answer2.innerHTML = `This is the sentence Value ${sentenceValue}`
    let word = document.getElementById('wordArea');
    let wordValue = (word.value).toLowerCase();

    // Process
    function stringFinder(psentence, pword){
        if(psentence.includes(pword) === true){
            return true;
        }else {
            return false;
        }
    }

    if(stringFinder(sentenceValue,wordValue) === true){
        answer2.innerHTML = `<br><b>Yes!</b> the word is present in the sentence`;
    } else {
        answer2.innerHTML = `<br><b>Opps!</b> Sorry not able find the word in the sentence`;
    }

    // answer2.innerHTML += `${stringFinder(sentenceValue, wordValue)}`;

}

// Console Question - Output will be on Console
/*
Question 3:
String Building: Write a JavaScript function that takes an array of words and constructs a sentence from them. The words should be separated by spaces, and the first letter of each word should be capitalized.
*/

(function(){

    function stringBuilder(array){
        // let joiningArray = array.join(" ");
        // return joiningArray;

        console.log("Console Question 3: ")

        if (array.length === 0){
            return console.log(`Please input some words`);
        } else {
            let capWordArray = [];

            for(let i = 0; i < array.length; i++){
                let word = array[i];
                let capWordLetter = word.charAt(0).toUpperCase() + word.slice(1);
                // console.log(capWordLetter);
                capWordArray.push(capWordLetter);
            }

            console.log(capWordArray) 
            // Convert Array to string
            let sentence = capWordArray.join(" ");
            return sentence;
        }

    }

    let words = ["hello", "world", "javascript", "programming"];
    console.log(stringBuilder(words));

    /*
    Learning map function
    const numbers = [1, 2, 3, 4, 5];

    Using map() to square each number and create a new array
    const squaredNumbers = numbers.map(function (number) {
    return number * number;
    });
    console.log(squaredNumbers);
    */ 

})()

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
question4Div.innerHTML += `<b><u>Question No.4: </u></b> </>`;
question4Div.innerHTML += `This Program will calculate the numbers received by you and also getting your input on what operation you want to do with those numbers and gives total value of the operation performed`;
question4Div.innerHTML += `<br> <b>"Let's Begin!!"</b> <br><br>`;

// 1. Please enter the numbers that user wants to calculate
// 2. Please input the operation
// 3. Please get the functions
question4Div.innerHTML += `
    <form id="question4">
        <label> Please input your numbers seperate by commas [Eg: 1,21,100] (Spaces after comma sould be ok) </label><br>
        <textarea rows="2" cols="50" id="numbers" onclick="()"> 1, 2, 3, 4 </textarea><br><br>
        <label> Please input the sign of the operator that you want to perform </label><br>
        <input type"text" id="operator" value="+" /><br><br>
        <label> Your tota</label>
        <button id="buttonNo2" onclick="question_2()"> Submit </button>
        <button id="reset" onclick="reset()"> Reset </button> <br>
    </form>
    `;
question4Div.innerHTML += `<div id="requestQuestion_2"></div>`;
question4Div.innerHTML += `<hr>`;


