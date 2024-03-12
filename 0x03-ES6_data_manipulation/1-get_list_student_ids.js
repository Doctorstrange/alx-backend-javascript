export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects) === false) {
    return [];
  }
  return arrayOfObjects.map((object) => object.id);
}
