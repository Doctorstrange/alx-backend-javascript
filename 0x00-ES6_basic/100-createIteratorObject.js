export default function createIteratorObject(report) {
  let departmentNumber = 0;
  let workerIndex = 0;

  return {
    next() {
      if (departmentNumber >= Object.keys(report.allEmployees).length) {
        return { done: true }; // End of iteration
      }

      const department = Object.keys(report.allEmployees)[departmentNumber];
      const workers = report.allEmployees[department];

      if (workerIndex >= workers.length) {
        departmentNumber++;
        workerIndex = 0;
        return this.next(); // Recursively go to the next department
      }

      const worker = workers[workerIndex];
      workerIndex++;

      return { value: worker };
    },
  };
}
