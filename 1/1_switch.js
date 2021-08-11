function Check(string) {
    let o = 0;
    let z = 0;
        for (let i = 0; i < string.length; i++) {
            switch(string[i]) {
                case "0":
                    z++;
                    break;
                case "1":
                    o++;
                    break;               
                default:
                    return false;
            }
            if(o < z) {
                return false;
            }
         }
         if(o == z) {
             return true;
         }
         else {
             return false;
         }

}
console.log(Check([1,1,1,0,0,0]));
console.log(Check("111o00"));
console.log(Check("101010"));
