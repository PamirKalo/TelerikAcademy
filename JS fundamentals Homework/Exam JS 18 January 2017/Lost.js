/**
 * Created by Kalo on 18.1.2017 г..
 */
// опит за решение на датата на самия изпит:
function solve(args) {
    var arr = args,
        firstStr = args[0].split(" "),
        R = +firstStr[0],
        C = +firstStr[1],
        row = (R - 1) / 2,
        col = (C - 1) / 2,
        matrix = [],
        boolMatrix = [],
        tempBoolArr = [],
        num = +0,
        doLoop = true,
        resultStr = `No rakiya, only JavaScript `;//${row} ${col}

    arr.splice(0, 1);

    // for (let i = 0; i < C; i += 1) {
    //     tempBoolArr.push(false);
    // }

    for (let i = 0; i < arr.length; i += 1) {
        var tempArr = arr[i].split(" ");
        matrix.push(tempArr);
        let tempBoolArr = [];
        for (let i = 0; i < C; i += 1) {
            tempBoolArr.push(false);
        }
        boolMatrix.push(tempBoolArr);
    }

    while (row >= 0 && row < R && col > 0 && col < C && doLoop === true) {
        var bitUp = +0,
            bitRight = +0,
            bitDown = +0,
            bitLeft = +0,
            mask = +1,
            res = +0;   // резултат от побитовата операция м/у маската и съответното число.

        num = +matrix[row][col];
        boolMatrix[row][col] = true;

        res = num & mask;
        bitUp = res;

        mask = mask << 1;
        res = num & mask;
        bitRight = res >> 1;

        mask = mask << 1;
        res = num & mask;
        bitDown = res >> 2;

        mask = mask << 1;
        res = num & mask;
        bitLeft = res >> 3;

        if (bitUp === +1 && row - 1 < 0) {
            break;
        } else if (bitUp === +1 && boolMatrix[row - 1][col] === false) {
            row = row - 1;
        } else if (bitRight === +1 && col + 1 >= C) {
            break;
        } else if (bitRight === +1 && boolMatrix[row][col + 1] === false) {
            col = col + 1;
        } else if (bitDown === +1 && row + 1 >= R) {
            break;
        } else if (bitDown === +1 && boolMatrix[row + 1][col] === false) {
            row = row + 1;
        } else if (bitLeft === +1 && col - 1 < C) {
            break;
        } else if (bitLeft === +1 && boolMatrix[row][col - 1] === false) {
            col = col - 1;
        } else {
            resultStr = `No JavaScript, only rakiya `;
            break; //doLoop = false;
        }
    }
    console.log(resultStr + row + " " + col);

}
// solve([
//     '7 5',
//     '9 3 11 9 3',
//     '10 12 4 6 10',
//     '12 3 13 1 6',
//     '9 6 11 12 3',
//     '10 9 6 13 6',
//     '10 12 5 5 3',
//     '12 5 5 5 6'
// ]);
// No JavaScript, only rakiya 1 2
solve(
    [
        '5 7',
        '9 5 3 11 9 5 3',
        '10 11 10 12 4 3 10',
        '10 10 12 7 13 6 10',
        '12 4 3 9 5 5 2',
        '13 5 4 6 13 5 6'
    ]);
//No rakiya, only JavaScript 0 1