class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, dept: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = dept;
    }

    public getEmployeeInfo(): string {
        // We can access private 'name' because we are inside the class
        return `Employee: ${this.name}, Position: ${this.position}`;
    }
}

const emp = new Employee("Cassian Andor", 5000, "Captain", "Intelligence");
console.log(emp.getEmployeeInfo()); 
// console.log(emp.salary); // Error: Property 'salary' is private.

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `${this.name} costs $${this.price}`;
    }
}

const laptop = new Product(101, "MacBook", 1200);
// laptop.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Must call 'super' to initialize the Parent class
    }

    // Overriding the parent's method
    makeSound(): string {
        return "Bark!";
    }
}

const myDog = new Dog("Chewbacca");
console.log(myDog.makeSound()); // Output: Bark!

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// No 'new Calculator()' needed!
console.log(Calculator.add(10, 5));      // Output: 15
console.log(Calculator.subtract(10, 5)); // Output: 5

interface User {
    readonly id: number;
    name: string;
    email: string;
}

// Inheritance for interfaces
interface PremiumUser extends User {
    membershipLevel?: string; // The '?' makes it optional
}

function printUserDetails(user: PremiumUser) {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
    if (user.membershipLevel) {
        console.log(`Level: ${user.membershipLevel}`);
    } else {
        console.log("Level: Standard");
    }
}

const user1: PremiumUser = {
    id: 1,
    name: "Han Solo",
    email: "han@falcon.com",
    membershipLevel: "Gold"
};

printUserDetails(user1);

