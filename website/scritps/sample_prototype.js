console.log("_________________prototype_________________");
function Hero(name){
    const hero = {
        name: name,
    };

    return hero;
}

Hero.prototype.saludar = function(){
    console.log(`hello i am ${this.name}`);
}

const hero = new Hero("damian");

console.log(Object.create(Hero("daniel")));
console.log(new Hero("daniel"));
console.log(Hero("daniel"));

console.log(hero.hasOwnProperty("name"));
console.log(hero.hasOwnProperty("saludar"));

console.log(hero.hasOwnProperty("toString"));


console.log(hero.__proto__.toString());

console.log(Object.getPrototypeOf(hero));

console.log("______________prototype inheritance________________");

function Person(name){
    this.name = name;
    return this; 
}

Person.prototype.born = function(){
    console.log(`${this.name} was born`);
}

function Bomber(name){
    this.name = "bomber";
    return this;
}
Bomber.prototype = Object.create(Person.prototype);

Bomber.prototype.off = function(){
    console.log(`${this.name} off`);
}

var bomber = new Bomber("asdf");
bomber.born();
bomber.off();

console.log(bomber);