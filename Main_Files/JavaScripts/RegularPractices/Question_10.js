/*
Write a JavaScript function that accepts two strings as arguments and determines if they are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another, such as "listen" and "silent." 
*/

(function(){
    function anagramChecker(string1, string2){
        let cleanedString_1 = string1.replace(/[^\da-zA-Z]/g, '').toLowerCase();
        let cleanedString_2 = string2.replace(/[^\da-zA-Z]/g, '').toLowerCase();

        sortedString1 = cleanedString_1.split('').sort().join('');
        sortedString2 = cleanedString_2.split('').sort().join('');

        if(sortedString1 === sortedString2){
            return "Yes, These are anagram words";
        } else {
            return "No, These are not anagram words";
        }
    }

    let word_1 = "listen";
    let word_2 = "silent";

    function output(){
        console.log(anagramChecker(word_1, word_2));
    }

    output();
})()