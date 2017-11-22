/**
 * Created by Kalo on 27.12.2016 г..
 */
function solve(args) {
    var N = +args[0],
        line = "";

    for (var i = 1; i<=N; i = i +1) {
        for (var j = i; j <N+i; j = j +1) {
            line = line + j + " ";
        }
        console.log(line);
        line = "";
    }
    //return resultStr;
}
solve(['5'])