class Check {
    static check(string) {
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
}
console.log(Check.check("101010"));
console.log(Check.check("1100"));
console.log(Check.check("111o00"));
