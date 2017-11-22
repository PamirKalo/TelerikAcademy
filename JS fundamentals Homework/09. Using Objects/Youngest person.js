/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var //arr1 = args,
        length = args.length,
        min =  +args[2],//Math.min()   arr1 = args,
        minIndex = +2;

    for (var i = 2; i < length; i += 3) {
        if (+args[i] < min) {
            min = +args[i];
            minIndex = +i;
        }
    }
    //console.info( minIndex );

    var youngest = args[minIndex - 2 ] + " " + args[minIndex - 1];
    console.info(youngest);


    //console.log(args[], args[]);
}

solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]);