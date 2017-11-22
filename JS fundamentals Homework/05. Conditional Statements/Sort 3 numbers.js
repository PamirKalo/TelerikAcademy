function solve(args) {
    // sides a and b and height h.
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        result = a + " " + b + " " + c;

    if (b > a && b > c) {
        if (c > a) {
            result = b + " " + c + " " + a;
        } else {
            result = b + " " + a + " " + c;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            result = c + " " + a + " " + b;
        } else {
            result = c + " " + b + " " + a;
        }
    } else if (c > b) {
        result = a + " " + c + " " + b;
    }
    //return  result;
    console.log(result);
}