/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    var sizeArr = +args[0],
        arr = args[1].split(" ");

    // method declaration:
    function isLarger(sampleArr,index ) {
        if (index === 0 && index === sampleArr.length - 1) {
            return -1;
        } else {
            if (+sampleArr[index] > +sampleArr[index - 1] && +sampleArr[index] > +sampleArr[index + 1]) {
                return +1;
            }
        }
        return +0;
    }

    // program that finds how many array members are larger than their neighbours using method IsLarger();
    var count = +0;
    for (var i = 0; i < sizeArr; i += 1) {
        if (isLarger(arr,i ) === +1) {
            count += 1;
        }
    }

    console.log(count);
}

solve(["6", "-26 -25 -28 31 2 27"]);

// Description
//
// Write a method that checks if the element at given position in given array of integers is larger than its two neighbours
// (when such exist). Write program that reads an array of numbers and prints how many of them are larger than their neighbours.
//
//     Input
//
// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the array
// Output
//
// Print how many numbers in the array are larger than their neighbours
// Constraints
//
// 1 <= N <= 1024
// Time limit: 0.2s
// Memory limit: 16MB
// Sample tests
//
// Input	Output
// 6
// -26 -25 -28 31 2 27