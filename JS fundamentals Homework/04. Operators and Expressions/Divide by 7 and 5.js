function solve(args) {
    var res = "false ";
    if (args[0] % 5 === 0 && args[0] % 7 === 0) {
        res = "true ";
    }
    return (res + args[0]);
}
