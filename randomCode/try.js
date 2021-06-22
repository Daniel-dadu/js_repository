// function countdown(n){
//     if(n < 1) return [];
//     var arr = countdown(n-1);
//     arr.push(n);
//     console.log(arr);
//     return arr;
//   }

// console.log(countdown(6));

// function rangeOfNumbers(startNum, endNum) {
//     if(endNum == startNum) return [endNum];
//     var arr = rangeOfNumbers(startNum, endNum-1);
//     arr.push(endNum);
//     return arr;
// };

// console.log(rangeOfNumbers(1, 5));


function stringsConstruction(a, b) {
    var arr = b.match(RegExp("["+a+"]", "g"));
    (arr != null) ? arr = arr.sort() : arr = 0;
    var noc = true, res = 0;
    while(noc){
        var at = a, x = 0, l = arr.length;
        console.log(arr);
        for(let i = 0; i < l && x < a.length; i++){
            console.log("at: " + at + " - arr[i]: " + arr[i])
            if(at.includes(arr[i])){
                at = at.replace(arr[i], "");
                console.log(at)
                arr.splice(i, 1);
                i--;
                x++;
                // console.log(at + "  letra: " + arr[i] + " o: " + typeof arr[i] + " " + typeof at)
            }
        }
        console.log(arr);
        if(x >= a.length) res++;
        else noc = false;
    }
    return res;
}

stringsConstruction("abc", "abccba");