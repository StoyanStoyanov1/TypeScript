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

class ITDeparment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
        
    }
}

class AccoutingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');

    }

    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

   
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDeparment( '123',['Stenly']);

it.describe();

it.addEmployee('Other');
it.addEmployee('Max');

it.printEmployeeInformation();

const accouting = new AccoutingDepartment('d2', []);

console.log(accouting.mostRecentReport);

accouting.addReport('Something went wrong...');
accouting.printReports();

