interface Admin {
    name: string;
    privileges: string[];
};

interface Employee {
    name: string;
    startDate: Date;
};

interface ElevatedEmployee extends Employee, Admin {}

const el: ElevatedEmployee = {
    name: "Stenly",
    privileges: ['create-server'],
    startDate: new Date(),
}