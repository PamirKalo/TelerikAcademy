/**
 * Created by Kalo on 28.12.2016 г..
 */
function solve(args) {
    var N = +args[0],
        arr = new Array(N);

    for (var i = 0; i <= N; i += 1) {
        arr[i] = i * 5;
        console.log(arr[i]);
    }
}
solve(['5']);