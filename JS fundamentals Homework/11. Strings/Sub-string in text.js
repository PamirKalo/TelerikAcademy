/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var text = args[1].toLowerCase(),
        subString = args[0].toLowerCase();

    // method declaration
    function countRepeatedSubstrings(someSub, someText) {
        var count = +0,
            index = +0;

        while (true) {
            index = someText.indexOf(someSub, index)

            if (index >= 0) {
                count += 1;
                index += someSub.length;
            } else break;
        }

        return count;
    }

    // main program
    console.log(countRepeatedSubstrings(subString, text));
}

solve(['in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);

// Sub-string in text
//
// Description
//
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//
// Input
//
// The input will consist of an array containing one string
// Output
//
// The output should be consisted of one line - the number of matches
// Constraints
//
