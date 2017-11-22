/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    function astDigit(num) {
        var digitArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        var index = +num[num.length - 1];
        return digitArr[index];
    }

    // program that get last digit of given integer number:
    var lastDigit = astDigit(args[0]);

    //return last digit of the number as an English word:
    console.log(lastDigit);
}

solve(["42"]);