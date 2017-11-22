/**
 * Created by Kalo on 13.1.2017 г..
 */
function solve(args) {
    var htmlDoc =  args[0],
        forReplace = "",
        temp = "",
        edited = "",
        tempArr = [];

    for(let i = 0; i < htmlDoc.length; i +=1){
        tempArr.push(htmlDoc[i]);
    }
    // while (true){
    //     let start = htmlDoc.indexOf("<a href=\"" , 0);
    //     if(start < 0) break;
    //
    //     let end = htmlDoc.indexOf("</a>" , 0);
    //     forReplace = htmlDoc.substring(start, end +4);
    //     temp = htmlDoc.substring(start+9, end) ;
    //
    //     tempArr = temp.split("\">");
    //     edited = "[" + tempArr[1] + "](" + tempArr[0] +")";
    //     htmlDoc = htmlDoc.replace(forReplace, edited );
    // }

    console.log(tempArr.join(""));
}

solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]
);
//<p>Please visit [our site](http://academy.telerik.com) to choose a training course. Also visit [our forum](www.devbg.org) to discuss the courses.</p>