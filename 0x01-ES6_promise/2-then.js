function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        resolve({ status: 200, body: 'success' });
      })
      .catch(() => {
        console.log('Got a response from the API');
        reject(new Error());
      })
      .finally(() => {
        console.log('Got a response from the API');
        // Logging already done in then/catch, so nothing to do here
      });
  });
}

export default handleResponseFromAPI;
