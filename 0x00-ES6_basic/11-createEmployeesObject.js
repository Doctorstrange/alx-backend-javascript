export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees, // Use computed property for dynamic key name
  };
}
