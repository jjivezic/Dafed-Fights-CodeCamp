//==========================================================================
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!
//factorialize(0) should return 1.
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {

    var sub = num;
    if (sub === 0) {
        return (sub + 1);
    } else {
        for (var i = 1; i < sub; i++) {
            num = num * i
        }
    }
    return num;
}
console.log(factorialize(0));
//==========================================================================
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
//==========================================================================
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
function palindrome(str) {

    //let lower = str.toLowerCase();
    let caracter = /[^A-Za-z0-9]/gi;
    let space = ' ';

    str = str.replace(space, '').replace(caracter, '').toLowerCase();
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('');


}
console.log(palindrome("eye"));
//  should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.
//====================================================================
// Find the Longest Word in a String 
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");
    return longestWord.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//================================
//Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
    var strUper = str.split(' ');
    var upercaseWord = strUper.map(function (word, index) {
        var changed = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        console.log(changed);

        return changed;
    });

    return upercaseWord.join(' ');
}

console.log(titleCase("I'm a little teA POT"));
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout"
//=================================================
//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // You can do this!

    var maxNum = arr.map(function (element) {
        maxFromArr = Math.max(...element)
        return maxFromArr;
        console.log('===>', JSON.stringify(maxFromArr));

    });

    return maxNum;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));

//=============================
//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {

    //return str.endsWith(target);//ecma 6 featuesr
    return str.substr(str.indexOf(target)) == target;
}

console.log(confirmEnding("Bastian", "an"));
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
//=======================================
// Repeat a string repeat a string 
// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num < 0) {
        return str = '';
    }
    return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
//==============================================================
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//  Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {

        if (num <= 3) {

            return str.slice(0, num) + "...";
        } else {

            return str.slice(0, num - 3) + "...";
        }

    } else {
        return str;
    }

}

console.log(truncateString("Atrrrr jjjj jii uuuu ", 12));
//truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
//truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
//truncateString("A-", 1) should return "A...".
//====================================================
//Chunky Monkey 
// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var split = [];
    var com = [];
    for (var i = 0, j = 0; i < arr.length; i++, j += size) {
        if (arr.slice(j, j + size).length > 0) {
            split[i] = arr.slice(j, j + size);
            com[i] = split[i];
        }
    }
    return com;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//==================================================
//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
    return arr.slice(howMany);

}
slasher([1, 2, 3], 2);
//slasher([1, 2, 3], 4) should return [].
//slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].

//================================================================
//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    //var truthyArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //     if (Boolean(arr[i]) === true) {
    //         truthyArr.push(arr[i])
    //     }
    // }

    // return truthyArr;

    var truthyArr = arr.filter(function (trythy) {
        return Boolean(trythy) === true;
    })
    return truthyArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
//bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
//============================================================



//==========================================================================
