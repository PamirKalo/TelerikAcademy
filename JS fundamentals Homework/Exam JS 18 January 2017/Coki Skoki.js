/**
 * Created by Kalo on 18.1.2017 г..
 */
function solve(args) {

    var N = args.length - 1,
        arr = args,
        index = +1,
        result = +arr[1];

    arr.splice(0, 1);   // трие първия елемент от масива.

    while (index < arr.length) {
        if (arr[index] % 2 === +0) {

            result = result + (+arr[index]);
            result = result % 1024;
            index = index + 2;
        }
        else {
            result = result * (+arr[index]);
            result = result % 1024;
            index = index + 1;
        }
    }
    console.log(result);
}
solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
]);