/**
 * Created by Kalo on 11.1.2017 г..
 */
function solve(args) {
    var sepRegEx = /\s+/;   // сепаратор инициализиран, като RegEx
    var arr = args[1].split(sepRegEx),
        arrSize = +arr[0],
        x = +args[2];

    // method declaration - count how many times x appears in arr1:
    function appearanceCount(x , arr) {
        var count = +0;

        for (var i = 0; i < arr.length; i += 1) {
            if(+arr[i] === +x){
                count +=1;
            }
        }
        return count;
    }

    // program that invoke a method that count how many times given number appears in a given array:
    var countedX = appearanceCount( x, arr);
    console.log(countedX);
}

solve(["8" , " 28                   6 21 6 -7856 73 73 -56" , "73"]);