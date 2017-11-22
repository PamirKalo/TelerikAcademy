/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var numN = +args[0],
        arr,
        temp = +0;
    arr = new Array(numN + 1);

    // for (var i = 4; i <= numN; i = i + 2) {
    //     arr1[i] = false;
    // }

    for (let j = 3; j <= numN; j = j + 2) {
        if (arr[j] === undefined) {
            temp = j + j;

            while (temp <= numN) {
                arr[temp] = 0;
                temp = temp + j;
            }
        }
    }

    for (var k = numN; k >= 2; k = k - 1) {
        if (arr[k] === undefined && arr[k] % 2 !== 0) {
            console.log(k);
            break;
        }
    }
}

solve(['120']);