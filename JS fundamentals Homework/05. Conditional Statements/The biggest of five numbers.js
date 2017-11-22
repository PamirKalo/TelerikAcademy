function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4] ,
        biggest = a;

    if (b > biggest || c > biggest || d > biggest || e > biggest) {
        biggest = b;
        if(c > biggest || d > biggest || e > biggest){
            biggest = c;
            if(  d > biggest || e > biggest){
                biggest = d;
                if(    e > biggest){
                    biggest = e;
                }
            }
        }
    }
    //return  result;
    console.log(biggest);
}
