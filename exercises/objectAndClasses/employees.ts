function employees (arrEmployees: string[]): void {
    const objEmployees = arrEmployees.reduce((employee: { [key: string]: number}, name: string) => {
        employee[name] = name.length;
        return employee;
    }, {});

   Object.entries(objEmployees).forEach(([name, num]: [string, number]) => {
    console.log(`Name: ${name} -- Personal Number: ${num}`);
   });
}