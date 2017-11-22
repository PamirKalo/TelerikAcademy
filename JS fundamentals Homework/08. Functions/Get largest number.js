/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    var max,
        input = args[0],
        arr = input.split([" "]);

    var firstNum = +arr[0],
        secondNum = +arr[1],
        thirdNum = +arr[2];

    function getMax(num1, num2) {
        if (+num1 > +num2) {
            return num1;
        }
        else  return num2;
    }

    // program that finds the biggest of three numbers
    max = getMax(firstNum, secondNum);
    if (thirdNum > max) {
        max = thirdNum;
    }
    //return max;
    console.log(max);
}

solve(["8 43 6"]);