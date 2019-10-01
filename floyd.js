const floydFun = () => {
    var a = " ", prevNumber = 1, i, depth = 10, b;
    for (i = 0; i < depth; i++) {
        j = 0, a = "";
        while (j <= i) {
            a = a + " " + prevNumber;
            j++;
            prevNumber++;
           
        }
        console.log(a)
    }
    return a;
}
floydFun()