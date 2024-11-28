function getPaymentTokenFromAPI(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({ data: 'Successful response from the API' });
        });
    }
    return Promise.reject(new Error('Failed to get token'));
}

module.exports = getPaymentTokenFromAPI;
