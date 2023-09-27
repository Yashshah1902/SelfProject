/*
Write a JavaScript program that takes an array of words and sorts them in alphabetical order. Then, create a comma-separated string from the sorted words. For example, given ["apple", "banana", "cherry"], the program should return "apple, banana, cherry."
*/

(function(){
    let myArray = ["apple", "banana", "cherry", "beet"];

    function commaSepString(array){
        let sortedArray = array.sort();

        console.log(sortedArray);

        return sortedArray.join(', ');
    }

    console.log(commaSepString(myArray));
})()