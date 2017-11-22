/**
 * Created by Kalo on 28.12.2016 г..
 */
function solve(args) {

    var firstArr = args[0].split('');
    var secondArr = args[1].split('');

    var lengthOfTheShorterOne = firstArr.length;
    var isFirstShorter = true;

    if (secondArr.length < lengthOfTheShorterOne) {
        lengthOfTheShorterOne = secondArr.length;
        isFirstShorter = false;
    }

    var areEqual = true;

    for (var i = 0; i < lengthOfTheShorterOne; i++) {
        if (firstArr[i] < secondArr[i]) {
            areEqual = false;

            return "<";
            //console.log(firstArr + " is higher lexicographically");
            //break;
        }

        if (firstArr[i] > secondArr[i]) {
            areEqual = false;

            return ">";
            //console.log(secondArr + " is higher lexicographically");
            //break;
        }
    }

    if (areEqual === true) {
        return "=";
        //console.log("Both arrays are equal");
    }
}

solve(['food', 'food']);