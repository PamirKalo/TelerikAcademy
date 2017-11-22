function solve(args) {
    // sides a and b and height h.
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        discriminant = b * b - 4 * a * c,
        result = "no real roots";

    if (discriminant > 0) {
        var x1, x2, d;
        d = Math.sqrt(discriminant);
        x1 = ((-b + d ) / (2 * a )).toFixed(2);
        x2 = ((-b - d ) / (2 * a )).toFixed(2);
        result = "x1=" + x1 + "; " + "x2=" + x2; // x1=-47.84; x2=-0.02
        x1 = +x1;
        x2 = +x2;

        if (x1 > x2) {
            result = "x1=" + x2.toFixed(2) + "; " + "x2=" + x1.toFixed(2); // x1=-47.84; x2=-0.02
        }
    } else if (discriminant === 0) {
        var x = ((-b) / (2 * a)).toFixed(2);
        result = "x1=x2=" + x;
    }

    //return  result;
    console.log(result);
}


