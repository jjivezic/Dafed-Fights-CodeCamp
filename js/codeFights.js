/*Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100,
the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.*/

function centuryFromYear(year) {
    var century;
    if (year % 100 === 0) {
        century = year / 100;
    } else {
        century = parseInt(year / 100) + 1;
    }
    return century;
}

console.log(centuryFromYear(1901));

/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
 */

inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
    var sumAdjecentArr = [];
    for (var i = 0; i < inputArray.length-1; i++) {
        var element = inputArray[i] * inputArray[i + 1];
        sumAdjecentArr.push(element);
    }
    console.log('sumAdjecentArr',sumAdjecentArr)
  return Math.max(...sumAdjecentArr);
}

console.log(adjacentElementsProduct(inputArray));