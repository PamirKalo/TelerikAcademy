function solve(args) {
    var x  = + args[0],
        y = + args[1],
        radius = Math.sqrt(x*x + y*y).toFixed(2);

    if(radius <= 2){
        return ( "yes " + radius );
    }
    else {
        return ( "no " + radius );
    }
}
