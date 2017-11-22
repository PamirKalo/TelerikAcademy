/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var text = args[0];
    //console.log(text);

    // method declaration
    var temp = "",
        flag = +0,
        arrBuilder = [],
        someText = text;

    for (let i = 0; i < someText.length; i += 1) {

        if (someText[i] === '<') {
            if (someText.indexOf("<orgcase>", i) === i || someText.indexOf("<ORGCASE>", i) === 1) {
                flag = 0;
                i = i + 9;
            } else if (someText.indexOf("<upcase>", i) === i || someText.indexOf("<UPCASE>", i) === i) {
                flag = 2;
                i = i + 8;
            } else if (someText.indexOf("<lowcase>", i) === i || someText.indexOf("<LOWCASE>", i) === i) {
                flag = 1;
                i = i + 9;
            }
        }

        if (someText[i] === '<') {
            if (someText.indexOf("</orgcase>", i) === i || someText.indexOf("<ORGCASE>", i) === i) {
                i = i + 9;
            } else if (someText.indexOf("</upcase>", i) === i || someText.indexOf("<UPCASE>", i) === i) {
                i = i + 8;
            } else if (someText.indexOf("</lowcase>", i) === i || someText.indexOf("<LOWCASE>", i) === i) {
                i = i + 9;
            }
            flag = 0;
            continue;
        }

        if (flag === 0) {
            arrBuilder.push(someText[i]);
        } else if (flag === 1) {
            temp = someText[i].toLowerCase();
            arrBuilder.push(temp);
        } else if (flag === 2) {
            temp = someText[i].toUpperCase();
            arrBuilder.push(temp);
        }
    }

    // main program        console.log(som)
    console.log(arrBuilder.join(""));
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
