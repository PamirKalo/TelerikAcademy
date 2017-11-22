/**
 * Created by Kalo on 27.12.2016 г..
 */
function solve(args) {
    var hex = args[0].toLocaleUpperCase(),
        decimal = +0,
        factor = +1;

    var hexArrDigits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];

    for (var i = hex.length-1; i >=0 ; i = i-1) {
        for (var j = 0; j < hexArrDigits.length ; j = j+1) {
            if(hex[i] === hexArrDigits[j]){
                decimal = decimal + j * factor;
                break;
            }
        }
        factor = factor * 16;
    }
    console.log(decimal);
    //return decimal ;
}
solve(['fe']);