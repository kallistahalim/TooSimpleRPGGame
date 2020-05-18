function Character(name, age, power, accuracy, shield) {
    this.name = name,
    this.age = age,
    this.power = power,
    this.accuracy = accuracy,
    this.shield = shield
}
var Coco = new Character("Coco", 2, 50, 10, 75);
var Leo = new Character("Leo", 1, 70, 5, 50);
console.log(Coco, Leo);
