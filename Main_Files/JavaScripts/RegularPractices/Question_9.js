/*
. (dot): Matches any single character except a newline.

*: Matches the preceding character or group zero or more times.

+: Matches the preceding character or group one or more times.

?: Matches the preceding character or group zero or one time (optional).

| (pipe): Acts as an OR operator, allowing you to match one of several patterns. For example, a|b matches either "a" or "b".

[] (square brackets): Defines a character class. For example, [aeiou] matches any vowel.

[^] (caret inside square brackets): A negated character class. It matches any character NOT listed within the brackets. For example, [^0-9] matches any character that is not a digit.

() (parentheses): Groups characters together. They can be used for applying quantifiers or capturing matched text.

{} (curly braces): Specifies a specific number of occurrences. For example, a{3} matches exactly three consecutive "a" characters.

^ (caret): Matches the start of a string or the start of a line in multi-line mode.

$ (dollar sign): Matches the end of a string or the end of a line in multi-line mode.

\ (backslash): Escapes special characters. For example, \. matches a literal dot, and \\ matches a literal backslash.

\d: Matches any digit (equivalent to [0-9]).

\w: Matches any word character (equivalent to [a-zA-Z0-9_]).

\s: Matches any whitespace character (e.g., spaces, tabs, newlines).

*? and +?: These are non-greedy or lazy quantifiers. They match as few characters as possible while still allowing the overall pattern to match.

\b: Matches a word boundary, allowing you to match whole words.

\B: Matches a non-word boundary.
*/


/*
Create a JavaScript function that checks if a given sentence is a palindrome (reads the same forwards and backward) while ignoring spaces and punctuation. For example, "A man, a plan, a canal, Panama!" should return true
*/

(function(){
    // Using regex
    function isPalindrome(sentence){
        let cleanedSentence = sentence.replace(/[^\da-zA-Z]/g,'').toLowerCase();
        let reversedSentence = cleanedSentence.split('').reverse().join('');
        if(cleanedSentence === reversedSentence){
            return true;
        } else {
            return false;
        }
    }
    
    let string = `A man, a plan, a canal, Panama!`;

    function output(){
        return console.log(isPalindrome(string));
    }

    output();
})()