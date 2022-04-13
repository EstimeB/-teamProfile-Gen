const Manager = require('../lib/manager');
const manager = new Manager('Testname', '2345678', 'testname@yahoo.com', 'fr234567');

it('Should test for the constructor values', () => {
    expect(manager.name).toEqual('Testname');
    expect(manager.id).toEqual('2345678');
    expect(manager.email).toEqual('testname@yahoo.com');
    expect(manager.officeNumber).toEqual('fr234567');
});
it('Should test for getName()', () => {
    expect(manager.getName()).toEqual('Testname');
});
it('Should test for getId()', () => {
    expect(manager.getId()).toEqual('2345678');
});
it('Should test for getEmail()', () => {
    expect(manager.getEmail()).toEqual('testname@yahoo.com');
});
it('Should test for getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toEqual('fr234567');
});
it('Should test for getRole()', () => {
    expect(manager.getRole()).toEqual('Manager');
});