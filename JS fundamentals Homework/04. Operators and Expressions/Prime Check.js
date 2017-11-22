function solve(args) {
    var num  = + args[0],
        limit = Math.sqrt(num),
        IsPrime = true,
        i = +2;

    if(num <= 2){   // num <= 1
        IsPrime = false;    // дали е вярно, че числата по-малки от две не са прости????
    }
    else  {
        for ( i ; i <= limit; i += 1){
            if(num % i  === 0){
                IsPrime = false ;
                break;
            }
        }
    }
    console.log(IsPrime);
}
