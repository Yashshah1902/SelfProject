// Author: Yash Shah
// Date: 20-09-2023

/*
Create a JavaScript function that checks if a given word is present in a sentence. The function should be case-insensitive and return true if the word is found and false if not.
*/

// Get the sentence from user
// let sentence = "The sunsets by the beach are always breathtaking, painting the sky with vibrant shades of orange and pink.";
// let word = "sun";

// String finder
// function strFinder(str, wrd){
//     let lowersentence = str.toLowerCase();
//     let lowerword = wrd.toLowerCase();

//     return lowersentence.includes(lowerword);
// }

// console.log(strFinder(sentence,word));

/* Question 2 */

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
                        <button id="resetq2" onclick="resetq2()"> Reset </button> <br>
                        </form>
                        `;
question2Div.innerHTML += `<div id="requestQuestion_2"></div>`;
question2Div.innerHTML += `<hr>`;

// Button and Area Functions

function clearAreaSen(){
document.getElementById("sentenceArea").value = "";
}

function clearAreaWord(){
document.getElementById("wordArea").value ="";
}

function resetq2(){
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