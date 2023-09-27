/*
Implement a JavaScript function that takes an integer n as input and generates a random alphanumeric string of length n. The function should return the generated string. 
*/

(function(){
    function stringBuilder(n){
        const alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let alphaNumericArray = alphaNumeric.split('');

        // console.log(alphaNumericArray);
        // console.log(alphaNumericArray.length);

        randomIndex = [];
        for(let x = 0; x < n; x++){
            randomIndex.push(Math.floor(Math.random()* (62 + 1)));
        }

        // console.log(randomIndex);

        let retuningArray = [];
        for(let x = 0; x < randomIndex.length; x++){
            retuningArray.push(alphaNumeric[randomIndex[x]])
        }

        // console.log(retuningArray)

        return retuningArray.join('')
    }   

    let integer = 10;
    console.log(stringBuilder(integer));
})()