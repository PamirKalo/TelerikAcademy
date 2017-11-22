function solve(args) {
    // sides a and b and height h.
    var digit = args[0],
        digitName = "not a digit";
    switch (digit)
    {
        case '0': digitName = "zero"; break;
        case '1': digitName = "one"; break;
        case '2': digitName = "two"; break;
        case '3': digitName = "three"; break;
        case '4': digitName = "four"; break;
        case '5': digitName = "five"; break;
        case '6': digitName = "six"; break;
        case '7': digitName = "seven"; break;
        case '8': digitName = "eight"; break;
        case '9': digitName = "nine"; break;
        default : digitName = "not a digit"; break;
    }
    //return  result;
    console.log(digitName);
}