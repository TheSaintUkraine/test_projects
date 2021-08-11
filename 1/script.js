function Check(string) {
    let o = 0;
    let z = 0;
    if(typeof(string) == "string") {
        for (let i = 0; i < string.length; i++) {
            if(string[i] == "0") {
                z++;
            }
            else if (string[i] == "1"){
                o++;
            }
            else {
                return false;
            }
            if(o < z) {
                return false;
            }
         }
         if(z == o) {
             return true;
         }
         else {
             return false;
         }
    }
    else {
        return false;
    }
}
console.log(Check([1,1,1,0,0,0]));
console.log(Check(111000));
console.log(Check("111o00"));
console.log(Check("101010"));
