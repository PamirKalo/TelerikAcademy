/**
 * Created by Kalo on 14.1.2017 г..
 */
function solve(args) {
    var text = args,
        inTag = false,
        lengthText = text.length,
        result = "";

    for (var i = 0; i < lengthText; i += 1) {
        var currentWord = text[i].trim(),
            len = currentWord.length;

        for (var j = 0; j < len; j += 1) {
            if (currentWord[j] === "<") {
                inTag = true;
            }
            if (currentWord[j] === ">") {
                inTag = false;
                continue;
            }
            if (inTag) {
                continue;
            } else {
                result += currentWord[j];
            }
        }
    }

    return result;
}