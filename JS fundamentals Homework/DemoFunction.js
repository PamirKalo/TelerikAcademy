
// функция, която дава сбора от числата в масив:

// function sum (numbers) {
//     var sum = 0, number;
//     for(number of numbers){
//         sum += number;
//     }
//     //return sum;
//     console.log(sum) ;
//
// }
// sum([5, 8]);

// функция, която дава сбора от четните числа в масив:
function sum(numbers) {
    var number,
        sum = 0;

    for (number of numbers) {
        if (0 === number % 2) {
            sum += number;
        }
    }
    //return sum;
    console.log(sum) ;
}

sum([5,7,8,2,14]);