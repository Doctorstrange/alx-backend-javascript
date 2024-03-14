var student1 = {
    firstName: "peter",
    lastName: "jane",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "lee",
    age: 22,
    location: "califonia"
};
var studentsList = [student1, student2];
// Rendering the table using Vanilla JavaScript
var table = document.createElement("table");
var headerRow = table.insertRow();
var firstNameHeader = headerRow.insertCell(0);
firstNameHeader.textContent = "First Name";
var locationHeader = headerRow.insertCell(1);
locationHeader.textContent = "Location";
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    firstNameCell.textContent = student.firstName;
    var locationCell = row.insertCell(1);
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
