/**
 * Created by Kalo on 27.12.2016 г..
 */
function solve(args) {
    var min = +args[0],
        max = +args[0],
        sum = +0,
        avg = +0;

    var resultStr = "";

    for (var number of  args) {
        if (1 * number < +min) {
            min = number;
        }
        if (number > +max) {
            max = number;
        }
        sum = sum + +number;

        resultStr += number + " ";
    }
    avg = sum / args.length;

    min = +min;
    max = +max;
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
    //return resultStr;
}

solve(['2', '5', '1'])