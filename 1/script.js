function Check(string) {
    let o = 0;
    let z = 0;
    for (let i = 0; i < string.length; i++) {
       if(string[i] == "0") {
           z++;
       }
       else {
           o++;
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
console.log(Check("110010"));
