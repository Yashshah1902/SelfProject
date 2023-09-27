/*
Create a JavaScript function that checks if a given character exists in a string. The function should return true if the character is found and false otherwise.
*/

(function(){
    // declare variables
    let sentence = "Hello World!";
    let character = "o";

    // Creating function for the output
    function characterchecker(string, element){
        let checkArray = string.split('');
        // console.log(checkArray);
        // console.log(element);

        for(let i = 0; i < checkArray.length; i++){
            if(checkArray[i] === element){
                return true;
            } 
        }

        return false;
    }

    console.log(characterchecker(sentence,character))
})()