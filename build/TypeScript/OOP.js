"use strict";
class Employee {
    constructor(id, name, sex, salary) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.salary = salary;
    }
    display() {
        console.log(`ID: ${this.id}, Name ${this.name}, Sex ${this.sex}, Salary ${this.salary}`);
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let emp1 = new Employee(1, "puem", "male", 1000);
emp1.display();
