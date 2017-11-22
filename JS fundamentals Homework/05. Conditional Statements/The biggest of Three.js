function solve(args) {
    // sides a and b and height h.
    var a  = + args[0],
        b  = + args[1],
        c = + args[2],
        biggest = a;

    if( b > a ){
        biggest = b;
    }
    if(c > biggest){
        biggest = c ;
    }
    return  biggest;
    //console.log(biggest);
}
