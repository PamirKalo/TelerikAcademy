/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    var sizeArr = +args[0],
        arr = args[1].split(" ");

    // method declaration:
    function isLarger(index, sampleArr) {
        if (index === 0 && index === sampleArr.length - 1) {
            return -1;
        } else {
            if (+sampleArr[index] > +sampleArr[index - 1] && +sampleArr[index] > +sampleArr[index + 1]) {
                return +1;
            }
        }

        return +0;
    }

    // program that finds how many array members are larger than their neighbours using method IsLarger():
    var count = +0;
    for (var i = 0; i < sizeArr; i += 1) {
        if (isLarger(i, arr) === +1) {
            console.log(i);
            return;
        }
    }

    console.log(-1);
}

solve(["6", "-26 -25 -28 31 2 27"]);