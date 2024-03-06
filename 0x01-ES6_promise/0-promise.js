function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('response from API');
    }, 500);
  });
}
export default getResponseFromAPI;
