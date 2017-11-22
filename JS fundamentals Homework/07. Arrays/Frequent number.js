/**
 * Created by Kalo on 8.1.2017 г..
 */
function solve(args) {
    var N = +args[0],
        maxCount = +0,
        count = 0,
        element = args[1],
        temp = args[1],
        i = 1;

    while (args.length > 1) {
        temp = args[1];
        count = 0;
        while (i < args.length) {
            if (temp === args[i]) {
                count += 1;
                args.splice(i, 1)
            } else {
                i += 1;
            }
        }
        i = 1;
        if(count > maxCount) {
            maxCount = count;
            element = temp;
        }
    }
    console.log(element + ` (${maxCount} times)`);
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);