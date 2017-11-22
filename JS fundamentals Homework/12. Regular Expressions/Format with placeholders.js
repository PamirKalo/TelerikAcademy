/**
 * Created by Kalo on 13.1.2017 г..
 */
function solve(args) {
        // var  person = JSON.parse( args[0]),
        //     regexName = /#\{name\}/g,
        //     regexAge = /#\{age\}/g,
        //     edited = "";

    // String.prototype.formatString = function () {
    //
    // }


   // edited = args[1].replace(regexName , person.name );
    // if(args[0].indexOf("age" , 0) > 0){
    //
    // }
    // edited = edited.replace(regexAge , person.Age)
    //console.log();

    //console.log(edited);
    // edited = args[1].replace(regexName , person.name);
    // if(args[0].indexOf("age" , 0) > 0){
    //
    // }
    // edited = edited.replace(regexAge , person.Age)
    // console.log(temp);
    String.prototype.formatStr = function(options) {
        var properties,
            edited = this;

        for (properties in options) {
            edited = edited.replace(new RegExp('#{' + properties + '}', 'g'), options[properties]);
        }

        return edited;
    };
    //return args[1].formatStr(JSON.parse(args[0]));
    console.log(args[1].formatStr(JSON.parse(args[0])));

}

solve([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);