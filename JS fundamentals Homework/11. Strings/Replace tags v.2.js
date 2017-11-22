/**
 * Created by Kalo on 14.1.2017 г..
 */
function solve(args) {
    var inputArr = args[0].split(''),
        inAnchor = false,
        inURL = false,
        inText = false,
        anchorFirstSymbol,
        anchorLastSymbol,
        replaceStr = '',
        url = [],
        text = [];

    // solve without regex:
    for (var i = 0; i < inputArr.length; i += 1) {
        if (inputArr[i] == '<' && inputArr[i + 1] == 'a') {
            inAnchor = true;
            anchorFirstSymbol = i;
        }

        if (inAnchor) {
            if (!inURL && inputArr[i] == '"') {
                inURL = true;
                continue;
            }

            if (inURL) {
                if (inputArr[i] == '"') {
                    i += 1;
                    inURL = false;
                    inText = true;
                    continue;
                }

                url.push(inputArr[i]);
            }

            if (inText) {
                if (inputArr[i] == "<") {
                    inText = false;
                    continue;
                }
                text.push(inputArr[i]);
            }

            if (inputArr[i] == 'a' && inputArr[i + 1] == '>') {
                anchorLastSymbol = i;

                replaceStr = '[URL="' + url.join("") + '"]' + text.join('') + '[\/URL]';
                inputArr.splice(anchorFirstSymbol, anchorLastSymbol - anchorFirstSymbol + 2);

                for (var j = 0; j < replaceStr.length; j += 1) {
                    inputArr.splice(anchorFirstSymbol + j, 0, replaceStr[j]);
                }

                inAnchor = false;
                inURL = false;
                inText = false;
                anchorFirstSymbol = null;
                anchorLastSymbol = null;
                replaceStr = '';
                url = [];
                text = [];
            }
        }
    }

    return inputArr.join('');
}