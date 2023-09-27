/*
Write a JavaScript function that finds and returns the largest number in an array of integers. Provide both the iterative and recursive versions of the solution.
*/

(function(){
    function largestNumberFinder(array){

        let largestNumber = 0;

        for(let i = 1; i < array.length; i++){

            if(largestNumber < array[i]){
                largestNumber = array[i];
            }
        }
        
        return largestNumber;
    }

    let numberArray = [];
    
    // Generate 10 random Numbers
    for(let i = 0; i < 10; i++){
        numberArray.push(Math.floor(Math.random() * 100));
    }
    console.log(numberArray)
    console.log(largestNumberFinder(numberArray));
})()