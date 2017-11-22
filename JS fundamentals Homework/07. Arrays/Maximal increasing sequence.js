/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var arr = args;
    var lenOfSeq = 1,
        bestStartPosOfSeq = 0,
        bestLenOfSeq = 1;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            lenOfSeq += 1;

            if (lenOfSeq > bestLenOfSeq) {
                bestLenOfSeq = lenOfSeq;
                bestStartPosOfSeq = (i - (bestLenOfSeq - 1));
            }
        } else {
            lenOfSeq = 1;
        }
    }

    console.log(+(bestStartPosOfSeq + bestLenOfSeq) - bestStartPosOfSeq);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
