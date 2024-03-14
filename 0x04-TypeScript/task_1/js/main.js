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
// Implementation of the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(args) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log(teacher3);
console.log(director1);
