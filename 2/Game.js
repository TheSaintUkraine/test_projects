class Game{
    constructor(min,max,lastNumber) {
        this.min = min;
        this.max = max;
        this.lastNumber = lastNumber;
    }
    static Check(answer,obj) {
        switch(answer) {
            case "up":
                obj.min = obj.lastNumber;
                break;
            case "down":
                obj.max = obj.lastNumber;
                break;
        }
    }
    static getResult(obj) {
        return Math.floor(((obj.max - obj.min)/2) + obj.min);
    }
}
module.exports = Game;