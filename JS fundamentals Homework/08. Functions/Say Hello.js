/**
 * Created by Kalo on 11.1.2017 г..
 */
function  solve(args) {
    var name = args[0];

    function  congrats(someName) {
        console.log('Hello, ' + someName + '!');
        console.log(`Hello, ${someName}!`);     //- ?! защо дава run time error в BgCoder?!
    }
    congrats(name);
}

solve(["Peter" , "Ivan"]);
