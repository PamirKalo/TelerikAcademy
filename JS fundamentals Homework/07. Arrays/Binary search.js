/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var N = +args[0],
        elementX = +args[args.length - 1],
        numArr = new Array(N),  // създава нов масив от N елемента.
        xIndex = -1
        // step = +N / 2,
        // index = step,
        // count = +0
    ;

    for (let i = 0; i < N; i += 1) {
        numArr[i] = +args[i + 1];
    }

    for (let i = 0; i < N; i += 1) {
        if (elementX === numArr[i]) {
            return i;
        }
    }
    return xIndex;
}
console.log(solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']));