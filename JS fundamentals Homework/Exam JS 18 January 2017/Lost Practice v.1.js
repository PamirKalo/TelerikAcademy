/**
 * Created by Kalo on 22.1.2017 г..
 */
// =========================================================
// упражнение и опит за решение след изпита:
function solve(args) {
    var arr = args,
        firstStr = args[0].split(" "),
        R = +firstStr[0],
        C = +firstStr[1],
        row = (R - 1) / 2,
        col = (C - 1) / 2,
        matrix = [],
        num = +0,
        doLoop = true,
        resultStr = `No rakiya, only JavaScript `;//${row} ${col}

    arr.splice(0, 1);   // трие първия елемент от масива.

    for (let i = 0; i < arr.length; i += 1) {
        var tempArr = arr[i].split(" ");
        matrix.push(tempArr);
    }

    while (row >= 0 && row < R && col > 0 && col < C && doLoop === true) {
        var bitUp = +0,
            bitRight = +0,
            bitDown = +0,
            bitLeft = +0,
            mask = +1,
            res = +0;   // резултат от побитовата операция м/у маската и съответнотo число.

        num = +matrix[row][col];
        matrix[row][col] = true;

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
        }
        else if (bitUp === +1 && matrix[row - 1][col] !== true) {
            row = row - 1;
        }
        else if (bitRight === +1 && col + 1 >= C) {
            break;
        }
        else if (bitRight === +1 && matrix[row][col + 1] !== true) {
            col = col + 1;
        }
        else if (bitDown === +1 && row + 1 >= R) {
            break;
        }
        else if (bitDown === +1 && matrix[row + 1][col] !== true) {
            row = row + 1;
        }
        else if (bitLeft === +1 && col - 1 < 0) {
            break;
        }
        else if (bitLeft === +1 && matrix[row][col - 1] !== true) {
            col = col - 1;
        }
        else {
            resultStr = `No JavaScript, only rakiya `;
            break; //doLoop = false;
        }
    }
    console.log(resultStr + row + " " + col);
}

// втори вариант. Леко оптимизиране на горното решение(19 октомври 2017):
function solve1(args) {
    var [R, C] = args[0].split(" ").map(a => +a),
        row = (R - 1) / 2,
        col = (C - 1) / 2,
        matrix = [],
        resultStr = `No rakiya, only JavaScript `;//${row} ${col}

    for (let i = 1; i < args.length; i += 1) {
        let tempArr = args[i].split(" ");
        matrix.push(tempArr);
    }

    while (true) {//nextR >= 0 && nextR < R && nextC >= 0 && nextC < C
        let num = +matrix[row][col],
            mask = +1,
            bitUp = +(num & mask),
            bitRight = +((num & mask << 1) >> 1),
            bitDown = +((num & mask << 2) >> 2),
            bitLeft = +((num & mask << 3) >> 3);

        matrix[row][col] = false;

        if ((bitUp && row - 1 < 0) || (bitRight && col + 1 > C - 1) ||
            (bitDown && row + 1 > R - 1) || (bitLeft && col - 1 < 0)) {
            break;
        } else if (bitUp === +1 && row - 1 >= 0 && matrix[row - 1][col] !== false) {
            row = row - 1;
        } else if (bitRight === +1 && col + 1 < C && matrix[row][col + 1] !== false) {
            col = col + 1;
        } else if (bitDown === +1 && row + 1 < R && matrix[row + 1][col] !== false) {
            row = row + 1;
        } else if (bitLeft === +1 && col - 1 >= 0 && matrix[row][col - 1] !== false) {
            col = col - 1;
        } else {
            resultStr = `No JavaScript, only rakiya `;
            break; // loop break
        }
    }
    console.log(resultStr + row + " " + col);
}

// solve1([
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
// solve1(
//     [
//         '5 7',
//         '9 5 3 11 9 5 3',
//         '10 11 10 12 4 3 10',
//         '10 10 12 7 13 6 10',
//         '12 4 3 9 5 5 2',
//         '13 5 4 6 13 5 6'
//     ]);
//No rakiya, only JavaScript 0 1