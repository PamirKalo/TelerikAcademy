/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    var sepRegEx = /\s+/,   // RegEx - define separator for split method below
        arr = args[1].split(sepRegEx);
    //arr1.shift();    // removes first element of array

    // method declaration - returns biggest integer number of a portion of array starting from a given index
    function GetBiggest(sampleArr, index) {
        index = +index;
        var max = sampleArr[index];
        for (var i = index + 1; i < sampleArr.length; i += 1) {
            if (+sampleArr[i] > +max) {
                max = sampleArr[i];
            }
        }
        return max;
    }

    // method declaration - sorting array of integers
    function SortArr(arr) {
        var sortedArr = [],
            N = +0,
            arrSize = arr.length,
            element;

        while (N < arrSize) {
            element = GetBiggest(arr, 0);
            sortedArr.push(element);
            N += 1;

            for (var j = 0; j < arr.length; j += 1) {
                if (element === arr[j]) {
                    arr.splice(j, 1);
                    break;
                }
            }
        }
        sortedArr.reverse();
        return sortedArr;
    }

    console.log(SortArr(arr).join(" "));
}
solve(['10', '36 10 1 34 28 38 31 27 30 20']);