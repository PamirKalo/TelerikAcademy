/**
 * Created by Kalo on 12.1.2017 г..
 */
function solve(args) {
    var address = args[0],
        tempArr = [],
        server = "",
        resource = "";

    tempArr = address.split(['://']);
    console.log("protocol: " + tempArr[0]);

    tempArr = tempArr[1].split(['/']);
    server = tempArr[0];
    console.log("server: " + server );

    tempArr.shift();
    resource = tempArr.join("/");
    console.log("resource: " + "/" + resource);
}

 solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);

// protocol: http
// server: telerikacademy.com
// resource: /Courses/Courses/Details/239