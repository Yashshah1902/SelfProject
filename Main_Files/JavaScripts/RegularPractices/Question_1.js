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
    question2Div.innerHTML += ` <form id="question1">
                            <label> Please input your sentence </label><br>
                            <textarea rows="3" cols="100" id="sentenceArea" onclick="clearArea()">The sunsets by the beach are always breathtaking, painting the sky with vibrant shades of orange and pink.</textarea><br><br>
                            <label> Please input the word or mini sentece you want to search </label><br>
                            <textarea rows="1" cols="50" id="wordArea" onclick="clearArea()">sun</textarea>
                            </form><br>
                            <button id="buttonNo2" onclick="question_2()"> Submit </button><br>`;
    question2Div.innerHTML += `<div id="requestQuestion_2"></div>`;
    question2Div.innerHTML += `<hr>`;

})()

function clearArea(){
    document.getElementById("sentenceArea").value = "";
    document.getElementById("wordArea").value ="";
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

