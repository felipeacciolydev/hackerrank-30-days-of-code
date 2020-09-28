function processData(input) {
    var arr = input.split("\n");
    var even = "";
    var odd = "";
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (j % 2 == 0) {
                even += arr[i][j];
            } else {
                odd += arr[i][j];
            }
        }
        console.log(even + " " + odd);
        even = "";
        odd = "";
    }
}