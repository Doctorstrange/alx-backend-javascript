export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    if (result !== '') {
      result += ' | '; // Add separator for subsequent employees
    }
    result += employee;
  }

  return result;
}
