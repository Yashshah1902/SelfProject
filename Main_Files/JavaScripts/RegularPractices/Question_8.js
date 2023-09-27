/*
Given an array of strings, write a JavaScript function to count the number of strings that contain the letter 'e' in them. Return the count. 
*/

(function (){
    function letterCounter(sentence, element){
        let count = 0;

        let sentenceArray = sentence.split("");
        // console.log(sentenceArray);

        for(let x = 0; x < sentenceArray.length; x++){
            if(sentenceArray[x].toLowerCase() === element){
                count++;
            }
        }

        return count;

    }

    let string = "Jai Hind";
    let letter = 'i';

    function output(){
        console.log(letterCounter(string, letter));
    }

    output();

})()