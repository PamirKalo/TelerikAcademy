function solve(args) {
    var res = "odd ";
    if(args[0] % 2 === 0)
    {res = "even ";}
    return res + args[0];
}
