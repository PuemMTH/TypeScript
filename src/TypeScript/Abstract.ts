abstract class Student {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    abstract register(): void;
    abstract pretest(): void;
    abstract posttest(): void;
    public getName(): string {
        return `Student: ${this.name}`;
    }
    public getId(): string {
        return `Student: ${this.id}`;
    }
}

class person extends Student {
    constructor(name: string, id: number) {
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