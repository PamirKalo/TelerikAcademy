/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    let text = args[0],
        inTags = false,
        exactTag = '',
        someTags = [],
        res = [];

    for (var j = 0; j < text.length; j += 1) {

        if (text[j] === '<') {
            inTags = true;

        } else if (text[j] === '>' && inTags) {
            inTags = false;
            exactTag += text[j];
            someTags.push(exactTag);
            exactTag = '';
        } else if (!inTags) {
            if (someTags.length === 0) {
                res.push(text[j]);
            } else if (someTags[someTags.length - 1].indexOf('upcase') !== -1) {
                res.push(text[j].toUpperCase());
            } else if (someTags[someTags.length - 1].indexOf('lowcase') !== -1) {
                res.push(text[j].toLowerCase());
            } else {
                res.push(text[j]);
            }
        }

        if (inTags) {
            exactTag += text[j];
        }

        if (someTags.length !== 0 && someTags[someTags.length - 1].indexOf('</') !== -1) {
            someTags.pop();
            someTags.pop();
        }
    }

    console.log(res.join(''));
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
