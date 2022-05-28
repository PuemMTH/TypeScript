class Employee {
    private id: number;
    private name: string;
    private sex: string;
    private salary: number;
    constructor(id: number, name: string, sex: string, salary: number) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.salary = salary;
    }
    display(): void {
        console.log(`ID: ${this.id}, Name ${this.name}, Sex ${this.sex}, Salary ${this.salary}`)
    }

    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }

}

let emp1 = new Employee(1,"puem","male",1000);
emp1.display();