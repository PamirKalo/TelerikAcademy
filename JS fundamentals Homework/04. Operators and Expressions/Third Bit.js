function solve(args) {
    var num  = + args[0],
        mask = 1 << 3,
        res = num & mask,
        bit = res >> 3;

    return bit;
}

console.log(solve(5));

// function test() {
//     console.log(1 & 1);
// }
//
// test();