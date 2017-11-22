/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var N = +args[0],
        arr = new Array(N),
        indexOfSmallest = args[1];

    for (let i = 0; i < N; i += 1) {
        arr[i] = +args[i + 1];
    }

    for (let i = 0; i < N; i += 1) {
        indexOfSmallest = i;

        for (let j = i + 1; j < N; j += 1) {
            if (arr[j] < arr[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfSmallest];
        arr[indexOfSmallest] = temp;
    }

    for (let i = 0; i < N; i += 1) {
        console.log(arr[i]);
    }
}

solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);