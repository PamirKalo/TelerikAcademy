function solve(args) {
    var number = +args[0],
        numAsWord = "empty";

    var wordArr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"];
    var wordArrTo99 = ["empty", "empty", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"];

    if (number < 16) {
        numAsWord = wordArr[number];
    } else if (number < 20) {
        numAsWord = wordArr[number % 10] + "teen";
    } else if (number < 100) {
        if (number % 10 === 0) {
            numAsWord = wordArrTo99 [number / 10];
        } else {
            numAsWord = wordArrTo99 [(number - (number % 10)) / 10] + " " + wordArr[number % 10].toLowerCase();
        }
    } else {
        var part = number % 100;
        var end = "";
        if (part < 16 && part > 0) {
            end = "and " + wordArr[part];
        } else if (part < 20 && part > 0) {
            end = "and " + wordArr[part % 10] + "teen";
        } else if (part < 100 && part > 0) {
            if (part % 10 === 0) {
                end = "and " + wordArrTo99 [part / 10];
            } else {
                end = "and " + wordArrTo99 [(part - (part % 10)) / 10] + " " + wordArr[part % 10].toLowerCase();
            }
        }
        numAsWord = wordArr [(number - part) / 100] + " hundred " + end.toLowerCase();
    }

    return numAsWord;
    //console.log(numAsWord);
}
