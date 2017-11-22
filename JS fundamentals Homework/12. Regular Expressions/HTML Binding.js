/**
 * Created by Kalo on 13.1.2017 г..
 */
function solve(args) {
    var options = JSON.parse(args[0]),
        inputStr = args[1].replace(/'/, '"');

    String.prototype.bind = function(parameters) {
        var result = this,
            currentMatch,
            regEx = new RegExp('data-bind-(.*?)="(.*?)"', 'gmi');

        while (currentMatch = regEx.exec(result)) {
            var arr,
                index = result.indexOf('>');

            if (result[index - 1] === '/') {
                index -= 1;
            }

            if (currentMatch[1] !== 'content') {
                arr = result.split('');
                arr.splice(index, 0, " " + currentMatch[1] + '="' + parameters[currentMatch[2]] + '"');
                result = arr.join('');
            } else {
                arr = result.split('');
                arr.splice(index + 1, 0, parameters[currentMatch[2]]);
                result = arr.join('');
            }
        }

        return result;
    };

    console.log(inputStr.bind(options));
}
solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);