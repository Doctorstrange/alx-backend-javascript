export default function (arrayOfObjects) {
  return arrayOfObjects.reduce((sumOfId, object) => sumOfId + object.id, 0);
}
