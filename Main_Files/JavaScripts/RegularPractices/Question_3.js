/*
String Building: Write a JavaScript function that takes an array of words and constructs a sentence from them. The words should be separated by spaces, and the first letter of each word should be capitalized.
*/

(function(){

    function stringBuilder(array){
        // let joiningArray = array.join(" ");
        // return joiningArray;

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

