document.addEventListener('DOMContentLoaded', function () {
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
            case weatherInfo.app_temp < 10:
                imagenPath = 'img/el_demon.jpeg';
                break;
            default:
                // Si la temperatura no coincide con ninguno de los casos, puedes establecer una imagen predeterminada o dejarla sin definir
                //imagenPath = 'imagen-default.jpg';
        }

        const htmlContent = `
            <h1>${weatherInfo.app_temp} °C</h1>
            <div class="contenedor">
                <img src="${imagenPath}" alt="mood" width="200" height="150" class="imagen">
            </div>
            <div class="container">
                <div class="box">  
                    <p>Índice de Calidad del Aire: ${weatherInfo.aqi}</p>
                </div>
                <div class="box2">
                    <p>Ciudad: ${weatherInfo.city_name}</p>
                </div>
                <div class="box">
                    <p>Nubes: ${weatherInfo.clouds}</p>
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