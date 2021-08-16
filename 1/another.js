class Check {
    static check(string,o = 0,z = 0) {
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
console.log(Check.check([1,1,1,0,0,0]));
console.log(Check.check("111o00"));
