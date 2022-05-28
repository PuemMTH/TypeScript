"use strict";
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return `Student: ${this.name}`;
    }
    getId() {
        return `Student: ${this.id}`;
    }
}
class person extends Student {
    constructor(name, id) {
        super(name, id);
    }
    // จะต้องระบบเสมอหากมีการสืบทอดมาจากคราสที่เป็น abstract
    register() {
        console.log(`${this.getName()} is registerd`);
    }
    pretest() {
        console.log(`${this.getName()} is pretest`);
    }
    posttest() {
        console.log(`${this.getName()} is posttest`);
    }
}
