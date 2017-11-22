/**
 * Created by Kalo on 19.12.2016 г..
 */
function solve(args) {
    // sides a and b and height h.
    var a  = + args[0],
        b = + args[1];

    if(a > b ){
        var temp = a;
        a = b;
        b = temp;
    }
    var concat = a + " " + b;
    //return "a " + "b";
    console.log(concat);
}