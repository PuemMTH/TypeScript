"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    displayName() {
        console.log(`Meow, I'm ${this.name}`);
    }
}
