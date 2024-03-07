function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve({ status: 200, body: 'success' });
      })
      .catch(() => {
        reject(new Error());
      })
      .finally(() => {
        // Logging already done in then/catch, so nothing to do here
      });
  });
}

export default handleResponseFromAPI;
