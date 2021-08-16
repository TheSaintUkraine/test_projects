class Check {
    static o = 0;
    static z = 0;
    static check(string) {
        for (let i = 0; i < string.length; i++) {
            switch(string[i]) {
                case "0":
                    this.z++;
                    break;
                case "1":
                    this.o++;
                    break;               
                default:
                    return false;
            }
            if(this.o < this.z) {
                return false;
            }
         }
         if(this.o == this.z) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(Check.check("101010"));