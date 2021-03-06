/**
 * Created by Kalo on 13.2.2017 г..
 */
function solve(args) {
    var N = + args[0],    // дължина на масива подаден, като аргумент.
        result = +args[1],  // първоначална стойност на резултата е второто число в масива подаден, като аргумент.
        i = +0; // индекс на цикъла

    // инициализира първия индекс от който ще започне цикъла в зависимост, дали числото е четно/нечетно.
    if(+args[1] % 2 === 0){
        i = 3;
    }
    else {
        i = 2;
    }

    for(i; i < args.length; i +=1){

        let temp = +args[i];
        if( temp % 2 === 0 ){
            result = (result +  temp ) % 1024;
            i += 1;
        }
        else {
            result = (result * temp ) % 1024;
        }
    }
    console.log(result);
    // console.log(6561 % 1024);
    // console.log(9 * 729);
    // console.log( 729 % 1024);
}
// solve([
//     '10',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0'
// ]);

// 21
  solve([
      '9',
      '9',
      '9',
      '9',
      '9',
      '9',
      '9',
      '9',
      '9',
      '9'
  ] );

// 329