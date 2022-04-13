const Employee = require('../lib/Employee');
const employee = new Employee('Testname', '2345678', 'testname@yahoo.com');

it('Should test for the constructor values', () => {
    expect(employee.name).toEqual('Testname');
    expect(employee.id).toEqual('2345678');
    expect(employee.email).toEqual('testname@yahoo.com');
});
it('Should test for getName()', () => {
    expect(employee.getName()).toEqual('Testname');
});
it('Should test for getId()', () => {
    expect(employee.getId()).toEqual('2345678');
});
it('Should test for getEmail()', () => {
    expect(employee.getEmail()).toEqual('testname@yahoo.com');
});
it('Should test for getRole()', () => {
    expect(employee.getRole()).toEqual('Employee');
});
