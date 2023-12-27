export function realizarConsultaChiste() {
    return fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
        .then(response => response.json())
        .then(data => {
            if (data && data.data.length > 0) {
                return data;
            } else {
                throw new Error('Datos de la API no válidos.');
            }
        });
}
//olas en el mar