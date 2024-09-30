class Department {
    name: string;
    employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Deparment: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Stenly');

accounting.describe();

accounting.addEmployee('Other');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
