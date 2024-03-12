function handleResponseFromAPI(promise) {
    return promise.then(() => {
        ({status: 200, body: 'success'})
    }).catch(() => {
        new Error()
    }).finally(() => {
        console.log('Got a response from API')
    })
}

export default handleResponseFromAPI;