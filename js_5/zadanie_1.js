function createEmployeeList(employees) {
    let employeeObjects = [];
    for (let employee of employees) {
        let employeeObject = {
            name: employee,
            personalNumber: employee.length
        };
        employeeObjects.push(employeeObject);
    }
    for (let obj of employeeObjects) {
        console.log(`Name: ${obj.name} - Personal Number: ${obj.personalNumber}`);
    }
}
let employees = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'];
createEmployeeList(employees);
