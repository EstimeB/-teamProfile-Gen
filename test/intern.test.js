const Intern = require('../lib/Intern');
const intern = new Intern('Testname', '2345678', 'testname@yahoo.com', 'Schoolname');

it('Should test for the constructor values', () => {
    expect(intern.name).toEqual('Testname');
    expect(intern.id).toEqual('2345678');
    expect(intern.email).toEqual('testname@yahoo.com');
    expect(intern.school).toEqual('Schoolname');
});
it('Should test for getName()', () => {
    expect(intern.getName()).toEqual('Testname');
});
it('Should test for getId()', () => {
    expect(intern.getId()).toEqual('2345678');
});
it('Should test for getEmail()', () => {
    expect(intern.getEmail()).toEqual('testname@yahoo.com');
});
it('Should test for getschool()', () => {
    expect(intern.getschool()).toEqual('Schoolname');
});
it('Should test for getRole()', () => {
    expect(intern.getRole()).toEqual('Intern');
});