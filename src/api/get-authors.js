/* import dotenv from 'dotenv'

const root_apiurl_remote = "https://sglibrary-node-api.herokuapp.com/"
const root_apiurl_local = "http://localhost:7001"
function rooturl(){
    dotenv.config()
    if (process.env.APIURL === 'local'){
        return root_apiurl_local
    } else {
        return root_apiurl_remote
    }

} */

export function getAuthors(success) { 

    return fetch('http://localhost:7001/catalog/authors', {
        headers: {Accept: 'application/json'}
    }).then(checkStatus)
      .then(parseJSON)
      .then(success);
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

function parseJSON(response) {
    return response.json()
}
