document.addEventListener('DOMContentLoaded', function () {
    // JSON de ejemplo
    const weatherData = {
      "count": 1,
      "data": [
        {
          "app_temp": 9.4,
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

    // Crea un HTML con la información
    const htmlContent = `
      <p class="temperatura">Temperatura: ${weatherInfo.app_temp} °C</p>
      <p class="calidad-aire">Índice de Calidad del Aire: ${weatherInfo.aqi}</p>
      <p class="ciudad">Ciudad: ${weatherInfo.city_name}</p>
      <p class="nubes">Nubes: ${weatherInfo.clouds}</p>
      <!-- ... (otros campos) -->
    `;

    // Agrega el contenido al contenedor
    weatherInfoContainer.innerHTML = htmlContent;
  });