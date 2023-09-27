// Author: Yash Shah
// Date: 20-09-2023

/*
Create a JavaScript function that checks if a given word is present in a sentence. The function should be case-insensitive and return true if the word is found and false if not.
*/

// Get the sentence from user
let sentence = "The sunsets by the beach are always breathtaking, painting the sky with vibrant shades of orange and pink.";
let word = "sun";

// String finder
function strFinder(str, wrd){
    let lowersentence = str.toLowerCase();
    let lowerword = wrd.toLowerCase();

    return lowersentence.includes(lowerword);
}

console.log(strFinder(sentence,word));