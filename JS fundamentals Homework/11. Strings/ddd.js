/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var someText = args,
        inTag = false,
        lenText = someText.length,
        output = "";

    for (var index = 0; index < lenText; index += 1) {
        var currentWord = someText[index].trim(),
            len = currentWord.length;

        for (let i = 0; i < len; i += 1) {
            if (currentWord[i] === "<") {
                inTag = true;
            }

            if (currentWord[i] === ">") {
                inTag = false;
                continue;
            }

            if (inTag) {
                continue;
            } else {
                output += currentWord[i];
            }
        }
    }

    return output;
}