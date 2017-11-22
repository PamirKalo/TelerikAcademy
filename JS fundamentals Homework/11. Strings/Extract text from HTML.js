//Created by Kalo on 12.1.2017 г..
function solve(args) {
    var text = args[0],
        editedTextArr = [],
        temp = "";

    // method declaration
    function ReplaceSpace(someString) {
        var editedString = "",
            regExStr = /\s+\</g;
        editedString = someString.replace(regExStr , "<");

        return editedString;
    }

    // method declaration
    function ExtractText(someHtml) {
        var editedString = "",
            regExStr = /<\/*\w+>/g;
        //editedString = someHtml.trim();
        editedString = someHtml.replace(regExStr , "");


        return editedString;
    }

    // main program
    for(var i = 0; i < args.length; i +=1){
        temp =  (args[i]).trim();
        editedTextArr.push(ExtractText(temp));
    }
    console.log(editedTextArr.join(""));
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
//Sample sitetextmore textand more...in body