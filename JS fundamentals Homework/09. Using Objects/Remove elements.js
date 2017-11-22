/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var arr = args;

    Array.prototype.remove = function(number) {
        var editedArray = [];

        for (var index = 0; index < this.length; index += 1) {
            if (this[index] != number) {
                editedArray.push(this[index]);
            }
        }

        return editedArray;
    };

    arr = arr.remove(arr[0]);

    var len = arr.length;

    for (var i = 0; i < len; i += 1) {
        console.log(arr[i]);
    }
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);