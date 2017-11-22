function solve(args) {
    // sides a and b and height h.
    var a  = + args[0],
        b = + args[1],
        h = + args[2],
        area = (a + b)*h / 2;
    console.log(area.toFixed(7));   // toFixed(7)-метода превръща числото в 'стринг' със седем цифри
    // след десетичната запетая. Ако самото число няма цифри след дес. запетая добавя нули.
}

solve([2,7,3]); // 13.5000000
