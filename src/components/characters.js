export const getListaCharacters = () => {
    return fetch('https://www.swapi.tech/api/people', {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            return responseJSON.results
        })
        .catch(error => {
            console.log("Error en la llamada GET:" + error);
            return [];
        })
}

export const getCharacter = (api) => {
    return fetch(api, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            console.log(responseJSON.result.properties)
            return responseJSON.result.properties
        })
        .catch(error => {
            console.log("Error en la llamada GET:" + error);
            return [];
        })
}