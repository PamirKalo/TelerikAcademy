/**
 * Created by Kalo on 27.12.2016 г..
 */
function solve(args) {
    const N = +args[0];
    var resultStr ="";

    for (var number = 1; number <= N; number += 1) {
        resultStr += number + " ";
    }
    console.log(resultStr);
    //return resultStr;
}
solve([10]);