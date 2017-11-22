/**
 * Created by Kalo on 12.1.2017 г..
 */

// решение за 50/100 точки
function solve(args) {
    var text = args[0];

    // method declaration:
    function someFunc(someString) {
        for (var i = 0; i < someString.length; i += 1) {
            if(someString[i] === '(' || someString[i] === ')'){
                if(someString[i] === ')'){
                    return false;
                }
            }
        }

        for (let i = someString.length-1 ; i >= 0; i -= 1) {
            if(someString[i] === '(' || someString[i] === ')'){
                if(someString[i] === '('){
                    return false;
                }
            }
        }

        return true;
    }

    // main program
    if(someFunc(text) === true){
        return "Correct";
    } else  return "Incorrect";

    //console.log(ReverseString(text));
}

solve([ '((a+b)/5-d)'  ]);

