
document.addEventListener('DOMContentLoaded', async function () {
    // JSON de ejemplo
    const weatherData = {
      "count": 1,
      "data": [
        {
          "app_temp": 2,
          "aqi": 31,
          "city_name": "Madrid",
          "clouds": 0,
          "country_code": "ES",
          "datetime": "2023-12-20:18",
          "dewpt": 1.9,
          "dhi": 0,
          "dni": 0,
          "elev_angle": -12.67,
          "ghi": 0,
          "gust": 10.515625,
          "h_angle": -90,
          "lat": 40.4168,
          "lon": -3.7038,
          "ob_time": "2023-12-20 18:42",
          "pod": "n",
          "precip": 0,
          "pres": 952,
          "rh": 61,
          "slp": 1030,
          "snow": 0,
          "solar_rad": 0,
          // ... (otros campos)
        }
      ]
    };

    // Accede a los datos específicos
    const weatherInfo = weatherData.data[0];
    const weatherInfoContainer = document.getElementById('weather-info');
    const changeTemperatureButton = document.getElementById('change-temperature-button');
    const obtenerDatosButton = document.getElementById('obtener-datos-button');

    // Agrega un event listener al botón para cambiar la temperatura
    changeTemperatureButton.addEventListener('click', function () {
        // Pide al usuario que ingrese la nueva temperatura
        const newTemperatureString = prompt('Ingrese la nueva temperatura:', '');

        // Convierte la entrada del usuario a un número
        const newTemperature = parseFloat(newTemperatureString);

        // Verifica si la entrada es un número válido
        if (!isNaN(newTemperature)) {
            // Actualiza el valor de la temperatura y vuelve a renderizar la información
            weatherInfo.app_temp = newTemperature;
            renderWeatherInfo();
        } else {
            alert('Por favor, ingrese un número válido para la temperatura.');
        }
    });

    let mensaje;
    async function realizarConsultaChiste() {
      try {
          const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es');
          const data = await response.json();
  
          if (data) {
              return data.joke;
          } else {
              throw new Error('Datos de la API no válidos.');
          }
      } catch (error) {
          console.error('Error al obtener datos de la API:', error);
          throw error; // Re-lanzar el error para que sea manejado por el código que llama a esta función
      }
  }


    // Uso de la función asíncrona
async function obtenerChiste() {
  try {
      mensaje = await realizarConsultaChiste();
      renderWeatherInfo();
  } catch (error) {
      // Manejar el error si es necesario
      console.error('Error al obtener chiste:', error);
  }
}
   obtenerChiste();

  
  
  // Llamada a la función
  


    // Función para renderizar la información meteorológica
    function renderWeatherInfo() {
        // Utiliza un bloque switch para manejar diferentes casos de temperatura
        let imagenPath;

        switch (true) {
            case weatherInfo.app_temp >= 5 && weatherInfo.app_temp <= 10:
                imagenPath = 'img/friazo.jpeg';
                break;
            case weatherInfo.app_temp > 10:
                imagenPath = 'img/chill.jpeg';
                break;
            case weatherInfo.app_temp < 5:
                imagenPath = 'img/el_demon.jpeg';
                break;
            default:
                // Si la temperatura no coincide con ninguno de los casos, puedes establecer una imagen predeterminada o dejarla sin definir
                //imagenPath = 'imagen-default.jpg';
        }


        
    obtenerDatosButton.addEventListener('click', function () {
      // Hacer la solicitud a la API de Weatherbit al pulsar el botón
      fetch('https://api.weatherbit.io/v2.0/current?key=0e96e32d5d784ce4b380bcb5c66481b2&city=Madrid&lang=es')
          .then(response => response.json())
          .then(data => {
              // Actualizar los datos de weatherInfo con los datos de la API
              if (data && data.data && data.data.length > 0) {
                  const apiWeatherInfo = data.data[0];
                  weatherInfo.app_temp = apiWeatherInfo.app_temp;
                  weatherInfo.aqi = apiWeatherInfo.aqi;
                  // Actualizar otros campos según sea necesario
              }

              // Volver a renderizar la información
              renderWeatherInfo();
          })
          .catch(error => console.error('Error al obtener datos de la API:', error));
  });

let a;
a = 'img/resolver.jpg'


        const htmlContent = `
            <h1>${weatherInfo.app_temp} °C</h1>
            <div class="contenedor">
                <img src="${imagenPath}" alt="mood" width="200" height="150" class="imagen">
                <p>Chiste: ${mensaje} </p>
            </div>
            <div class="container">
                <div class="box">
                    <p>Índice de Calidad del Aire: ${weatherInfo.aqi}</p>
                
                        <img src="${a}" with="200" height="150">
                    </div>
                <div class="box2">
                    <p>Ciudad: ${weatherInfo.city_name}</p>
                </div>
                <div class="box">
                    <p>Nubes: ${weatherInfo.clouds}</p>
                    <img src="img/nube.png" alt="mood" width="200" height="150" class="nube">
                </div>
                <div class="box2">  
                    <p> Otros campos </p>
                </div>
            </div>
        `;

        // Agrega el contenido al contenedor
        weatherInfoContainer.innerHTML = htmlContent;
    }

    // Llama a la función para renderizar la información al cargar la página
    renderWeatherInfo();
});