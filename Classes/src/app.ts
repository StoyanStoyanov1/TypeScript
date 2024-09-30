class Department {
    private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, n: string) {
        this.id = id;
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

const accounting = new Department( '123','Stenly');

accounting.describe();

accounting.addEmployee('Other');
accounting.addEmployee('Max');

accounting.printEmployeeInformation();
