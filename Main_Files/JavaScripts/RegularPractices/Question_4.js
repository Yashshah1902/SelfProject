/*
Write a JavaScript function that calculates the sum of all the numbers in an array.
*/

(function (){

    // function sumOfArray(array){
    // let sum = 0;

    // for(let i =0; i < array.length; i++){
    //     sum += array[i];
    // }
    
    // return sum`z;
    // }

    // let myarray = [];
    // for(let i =0; i < 10; i++){
    //     myarray.push(Math.floor(Math.random() * 100 ));
    // }
    // console.log(myarray);
    // console.log(sumOfArray(myarray));

    // Using forEach Method

    function sumOfArray(array) {
        let sum = 0;
        
        array.forEach(element => {
            sum += element
        });

        return sum;
    }

    let myarray = [];

    myarray = new Array(10).fill().map(() => Math.floor(Math.random() * 100)); // using .map() to push random numbers

    // for(let i =0; i < 10; i++){
    //     myarray.push(Math.floor(Math.random() * 100 ));
    // }
    console.log(myarray);
    console.log(sumOfArray(myarray));

})()