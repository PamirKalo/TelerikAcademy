/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var N = +args[0],
        count = +1,
        maxCount = +1;

    var arr = new Array(N);
    args.splice(0, 1);

    for (let j = 0; j < N; j += 1) {
        arr[j] = args[j];
    }

    for (var i = 1; i < N; i += 1) {
        if (arr[i] === arr[i - 1]) {
            count += 1;
        } else {
            if (count > maxCount) {
                maxCount = count;
            }
            count = 1;
        }
    }

    if (count > maxCount) {
        maxCount = count;
    }
    console.log(maxCount);
    //return maxCount;
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);