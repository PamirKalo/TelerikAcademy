function solve(args) {
    var len = args[0].length,
        third = args[0][len - 3];

    if (len < 3) {
        console.log('false' + ' ' + 0)
    } else if (third == 7) {
        console.log('true')
    } else {
        console.log('false' + ' ' + args[0][len - 3])
    }

}