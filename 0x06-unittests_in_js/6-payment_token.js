function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // For simplicity, rejecting with a message in case of failure
            reject(new Error('API request failed'));
        }
    });
}

module.exports = getPaymentTokenFromAPI;