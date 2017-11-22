/**
 * Created by Kalo on 28.12.2016 г..
 */
// ============================================
function solve(args) {
    var arr = args;
    var someText = "ТелерикАкадеми",
        start = 3, end = 9, part = "";
    part = someText.substring(start, end); //// -> връща част от текста намираща се
// от start-индекса вкл до енд индекса БЕЗ него.
    // part = "ерикАк"
    console.log(part);

    console.log(args);
    console.log(arr1);
    arr1[0] = true;
    console.log(args);
    console.log(arr1);
    if (+arr1[1] === undefined) {
        console.log("yesss");
    }

    function factorial(n) {
        if (n === 0) {
            return 1;
        }

        return factorial(n - 1) * n;
    }

    console.log(factorial(5));  //120
    console.log(factorial(12)); //479001600
}
// solve([
//     '5 7',
//     '9 5 3 11 9 5 3',
//     '10 11 10 12 4 3 10',
//     '10 10 12 7 13 6 10',
//     '12 4 3 9 5 5 2',
//     '13 5 4 6 13 5 6'
// ]);

// ===================================================
// примери за метода sort oт build-in класа Array:
function sortSample() {
    var fruit = ['cherries', 'apples', 'bananas'];
    console.log(fruit);
    fruit.sort(); // ['apples', 'bananas', 'cherries']
    console.log(fruit);

    var scores = [1, 10, 21, 2];
    scores.sort(); // [1, 10, 2, 21]
    console.log(scores);
// Note that 10 comes before 2, because '10' comes before '2' in Unicode code point order.

    var numbers = [5, 1, 2, 4, 6];
    numbers.sort(function (x, y) {  //Sorts an array of numbers descending
        return y - x;   // подрежда елементите в зависимост, дали разликата м/у тях е била < , = , > от НУЛА!
        //return y > +x;
    });
    console.log(numbers);     //[ 6, 5, 4, 2, 1 ]
}

// sortSample();

//===============================
// пример за проверка дали някакъв низ е NaN - Not-a-Number:
function checkIsNaNSample() {
    console.log(isNaN('ffff'));
}

// checkIsNaNSample();

// =============================
// примери за функции намиращи най-голяма стойност в масив:
function maxValueSamples() {
    var arr = [1, 2, 3, 99, 888];
    var maxElement = Math.max(...arr);
    console.log(maxElement);

    function max(arr) {
        var maxValue = arr[0];  // първоначално дефинирана макс. ст-ст на масива.

        // forEach() извиква функцията Math.max за всеки елемент от масива с аргумент съответния елемент и maxValue.
        arr.forEach((val) => maxValue = Math.max(maxValue, val));
        return maxValue;
    }

    console.log(max(arr));

    console.log(Math.max(23, 24, 89)); // 89
    console.log(Math.max([23, 24, 89])); // NaN ,  когато е подаден масив
}

// maxValueSamples();

// ================================
// пример за деклариране на брояча в цикъла, като глобална променлива - var. В този случай
// ако извикаме функциите записани в масива ще полочим десет пъти числото10, но ако
// декларираме брояча с let ще получим числата от 1 до 9:
function sampleVarOrLet() {
    var funcArr = [];   // празен масив в който ще слагаме декларации на функции.

    for (var i = 0; i < 10; i = i + 1) {  // ако i е декларирано с let получаваме от 1 до 9
        funcArr.push(function () {
            console.log(i);
        });
    }
    funcArr.forEach(function (func) {
        func();     // outputs the number "10" ten times if use 'var' or numbers from 1 to 9
                    // if use 'let' declaration.
    });
}

// =============================================================
// Показва, че функциите са обекти и правилния начин за разбирането им е да ги разглеждаме,
// като обекти, които приемат референции към обекти, вършат нещо и връщат референции към
// обекти(някакъв код):
// пример 1:
function sample() {
    function funcAdd() {
        // връща референция към обект, който има метод/функция.
        return {
            add: function rrr(a, b) {
                return a + b;
            }
        }
    }

    console.log(funcAdd().add(3, 5));
    console.log(funcAdd.toString());

    // пример 2:
    function funcAdd1() {
        // в случая първата функция връща референция към др. функция.
        return function rrr(a, b) {
            return a + b;
        }
    }

    var inner = funcAdd1(); // връща референция към вътрешната функция и я
    // записваме в променливата inner, след което извикваме променливата inner,
    // като функция с някакви аргументи:
    console.log(inner(10, 20));
    // другият начин е да извикаме външната функция и след това в скоби да зададем
    // съответните аргументи и по този начин да извикаме вътрешната функция:
    console.log(funcAdd1()(10, 20));
}

// sample();

// ================================
// Пример за IIFE - функции, които се извикват незабавно след декларирането им.
// пример 1:
(function () {
    console.log('Eto me')
}());
// пример 2:
let someIIFE = (function () {
    console.log('eto me 2')
});
someIIFE();
// пример 3:
let count = (function () {
    let counter = +0;
    return function () {
        console.log(counter += 1);
    }
})();
count();  // 1
count();  // 2
count();  // 3
count();  // 4
// ================================
// Пример за CLOSURE, който при всяко ново извикване връща следващото число от
// редицата на Фибоначи:
let fib = (function () {
    let f0 = 0, f1 = 1;
    return function () {
        let f = f0 + f1;
        f0 = f1;
        f1 = f;
        return f;
    }
})();
// console.log(fib());   // 1
// console.log(fib());   // 2
// console.log(fib());   // 3
// console.log(fib());   // 5
// console.log(fib());   // 8
// console.log(fib());   // 13
// console.log(fib());   // 21

// ================================
// пример за дефиниране на обект със свойства и методи. Недостатъка на този начин е
// че променливите са достъпни и могат да бъдат променяни произволно:
let moduleObj = {
    count: 0,   // променливата е достъпна не само, чрез функциите , но и директно;
    increase: function (num) {
        return this.count += num;
    },
    decrease: function (num) {
        return this.count -= num;
    },
    value: function () {
        return this.count;
    }
};

console.log(moduleObj.value());
moduleObj.increase(4);
console.log(moduleObj.value());
console.log(moduleObj.count);
moduleObj.count = 8;    // директен достъп и промяна.
console.log(moduleObj.count);
// пример за обект направен с CLOSURE посредством IIFE. По този начин промеливата
// count вече е недостъпна директно, а само през интерфейса на функциите които връща.
// Постига се капсулиране:
function closureSample() {
    let moduleClosure = (function () {
        let count = +0;
        return {
            increase: function (num) {
                return count += num;
            },
            decrease: function (num) {
                return count -= num;
            },
            value: function () {
                return count;
            }
        }
    })();

    // вече нямаме директен достъп до променливата count, а само през декларираните методи и
// при опит за достъпване на свойството дава undefined:
    console.log(moduleClosure.count);  // undefined
// достъп до count е само, чрез метода value();
    console.log(moduleClosure.value());  // 0
}

// closureSample();

// ================================
// ПРИМЕР за променлива на която е присвоена изпълнението на едно IIFE (незабавно изпълняваща се функция).
// Резултатът от изпълнението на това IIFE е РЕФЕРЕНЦИЯТА към функция, която увеличава една променлива
// при всяко извикване:
var ccc = (function () {
    var counter = 0;
    return function () {
        return ++counter;
    }
})();


// console.log(ccc());
// console.log(ccc());
// console.log(ccc());
// console.log(ccc());
// console.log(ccc());

// ==================================
function sampleIterationOverObject() {
    let Car = {
        color: "red",
        enginePower: 100,
        doors: 4
    };

    for(let property in Car){
        console.log(property);
        console.log(Car[property]);
    }

    let keysArr = Object.keys(Car);

    for(let propKey of keysArr){
        console.log(propKey);  // показва свойствата на обекта
        console.log(Car[propKey]); // показва стоностите на тези свойства
    }

    let allEntries = Object.entries(Car);
    for(let entry of allEntries){
        let [key, value] = entry;   // използваме деструктуриране за присвояване инициализиране на променливите key/value.
        console.log(key, ' : ', value);  // показва свойствата на обекта
    }

}

sampleIterationOverObject();