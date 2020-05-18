function Character(name, age, power, accuracy, shield) {
    this.name = name,
    this.age = age,
    this.power = power,
    this.accuracy = accuracy,
    this.shield = shield,
    this.LevelUp = function() {
        this.power +=5,
        this.accuracy += 10,
        this.shield += 5
    },

    this.attack = function(enemy) {
        enemy.power -= 5,
        enemy.accuracy -= 3,
        enemy.shield -= 4
    }, 
    
    this.isAlive = function() {
        if(this.power > 0) {
            console.log(this.name + "is still alive");
        } else {
            console.log(this.name + "is dead");
        }
    }

}
var Coco = new Character("Coco", 2, 50, 10, 75);
var Leo = new Character("Leo", 1, 70, 5, 50);

Coco.attack(Leo);
console.log(Leo);

Leo.attack(Coco);
console.log(Coco);
