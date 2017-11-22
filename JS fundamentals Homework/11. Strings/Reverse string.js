/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var text = args[0];

    // method declaration:
    function reverseString(someString) {
        var reversedStr = "";
        for (var i = 0; i <  someString.length; i += 1) {
            reversedStr = someString[i]  +  reversedStr;
        }
        return reversedStr;
    }

    // main program
    console.log(reverseString(text));
    //return ReverseString(text);

}

solve(["Peter" ]);