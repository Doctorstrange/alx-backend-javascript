// Example usage:
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'Alice',
    fullTimeEmployee: true,
    lastName: 'Johnson',
    location: 'New York',
    yearsOfExperience: 10,
    numberOfReports: 5
};
function printTeacher(firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    return "".concat(firstLetter, ". ").concat(lastName);
}
console.log(teacher3);
console.log(director1);
