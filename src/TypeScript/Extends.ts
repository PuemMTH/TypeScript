class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayName(): void {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    displayName(): void {
        console.log(`Meow, I'm ${this.name}`);
    }
}