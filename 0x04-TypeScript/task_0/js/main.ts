interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "peter",
    lastName: "jane",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "lee",
    age: 22,
    location: "Los Angeles",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Rendering the table using Vanilla JavaScript
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  firstNameHeader.textContent = "First Name";
  const locationHeader = headerRow.insertCell(1);
  locationHeader.textContent = "Location";
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell(1);
    locationCell.textContent = student.location;
  });
  
  document.body.appendChild(table);
  