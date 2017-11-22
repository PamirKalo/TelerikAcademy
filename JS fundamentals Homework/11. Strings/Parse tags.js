/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var text = args[0];

    // method declaration
    function ParseTags(someText, tag) {
        var temp = "",
            index = +0,
            end = +0,
            closeTag = tag.replace("<", "</");

        while (true) {
            index = someText.indexOf(tag, 0)

            if (index >= 0) {
                end = someText.indexOf(closeTag, 0);
                temp = someText.substring(index + tag.length, end);
                switch (tag) {
                    case '<upcase>':
                        temp = temp.toUpperCase(); break;
                    case '<lowcase>':
                        temp = temp.toLowerCase(); break;
                    default :
                        break;
                }
                someText = someText.substring(0, index) + temp + someText.substring(end + tag.length + 1);
            }
            else break;
        }
        return someText;
    }

    // main program
    var parsedText = ParseTags(text, "<lowcase>");
    parsedText = ParseTags(parsedText, "<orgcase>");

    console.log(ParseTags(parsedText, "<upcase>"));
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
