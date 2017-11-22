/**
 * Created by Kalo on 19.12.2016 г..
 */
function solve(args) {
    // sides a and b and height h.
    var a  = + args[0],
        b  = + args[1],
        c = + args[2],
        sign = '+';

    if(a === 0 || b === 0 || c === 0  ){
        sign = '0';
    }
    else  if ((a < 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0) ||
        (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0)){
        sign = '-';
    }
    return  sign;
    // console.log(sign);
}
//solve(['0', '-2.5', '4']);
//03. The biggest of Three04. Sort 3 numbers05. Digit as word06. Quadratic equation07.
// The biggest of five numbers08. Number as words