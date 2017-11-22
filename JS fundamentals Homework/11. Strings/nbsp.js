/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var text = args[0];

    // method declaration
    function ReplaceSpace(someString) {
        var editedString = "",
            regExStr = /(\s)/g;
        editedString = someString.replace(regExStr , "&nbsp;");


        return editedString;
    }

    // main program
    console.log(ReplaceSpace(text));
}
solve(["Peter PPPP" ]);