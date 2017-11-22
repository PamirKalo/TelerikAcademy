/**
 * Created by Kalo on 18.1.2017 г..
 */
// /\\<?\w*\\>/g,
function solve(args) {
    var text = args,
        inTag = false,
        lengthText = text.length,
        regEx = /\s+\\</g,//<\?\w*>
        result = "";


    for (let i = 0; i < lengthText; i += 1) {
        let edited = "";
       edited= text[i].replace(regEx , "");
        result = result + edited;
    }

    console.log(result);
}
solve([
'<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
    ]);