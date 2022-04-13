const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Testname', '2345678', 'testname@yahoo.com', 'userName');

it('Should test for the constructor values', () => {
    expect(engineer.name).toEqual('Testname');
    expect(engineer.id).toEqual('2345678');
    expect(engineer.email).toEqual('testname@yahoo.com');
    expect(engineer.github).toEqual('userName');
});
it('Should test for getName()', () => {
    expect(engineer.getName()).toEqual('Testname');
});
it('Should test for getId()', () => {
    expect(engineer.getId()).toEqual('2345678');
});
it('Should test for getEmail()', () => {
    expect(engineer.getEmail()).toEqual('testname@yahoo.com');
});
it('Should test for getGitHub()', () => {
    expect(engineer.getGitHub()).toEqual('userName');
});
it('Should test for getRole()', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});