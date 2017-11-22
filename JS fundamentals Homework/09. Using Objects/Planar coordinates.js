/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    // fields
    var points = args,
        lines = [],
        length = points.length;

    // fill the array of lines
    for (var i = 0; i < length - 3; i += 4) {
        lines.push(calculateDistance(+points[i], +points[i + 1], +points[i + 2], +points[i + 3]));
    }

    // print
    if (isTriangle()) {
        console.log(lines[0].toFixed(2));
        console.log(lines[1].toFixed(2));
        console.log(lines[2].toFixed(2));
        console.log('Triangle can be built')
    } else {
        console.log(lines[0].toFixed(2));
        console.log(lines[1].toFixed(2));
        console.log(lines[2].toFixed(2));
        console.log('Triangle can not be built');
    }

    // check if the conditions to form a triangle are correct
    function isTriangle() {
        return (lines[0] + lines[1] > lines[2] && lines[1] + lines[2] > lines[0] && lines[0] + lines[2] > lines[1]);
    }

    // calculate lines
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
}
solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);