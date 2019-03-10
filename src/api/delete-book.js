export function deleteBook(bookId) {
    return fetch('http://localhost:7001/catalog/book/'+bookId+'/delete', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

function checkStatus(response) {
    console.log(response.status)
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
}
