function solve(args) {
    // sides a and b and height h.
    var x  = + args[0],
        y = + args[1],
        distance = Math.sqrt( (x-1)*(x-1) +(y-1)*(y-1 )),
        circle = "outside circle",
        rectangle = "outside rectangle";

    if(distance <= 1.5){
        circle = "inside circle";
    }
    if(x >= -1 && x <= -1 + 6 && y <= 1 && y >= 1 - 2) {
        rectangle = "inside rectangle";
    }
    console.log( circle, rectangle )
}
