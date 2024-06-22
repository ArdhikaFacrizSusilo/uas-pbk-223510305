<template>
  <div class="weather-widget" :style="{ backgroundImage: 'url(http://satelit.bmkg.go.id/IMAGE/HIMA/H08_EH_Indonesia.png?id=041942r54s3p7j6pkiftt4k)' }">
    <q-card class="widget-card">
      <q-card-section>
        <h1>Cuaca Saat Ini</h1>
        <q-form @submit.prevent="updateWeather">
          <q-input
            v-model="city"
            placeholder="Masukkan nama kota"
            outlined
            dense
            class="input-field"
          />
          <q-btn type="submit" label="Cari" color="primary" class="search-btn" />
        </q-form>
      </q-card-section>

      <q-card-section v-if="weather" class="weather-info">
        <p><strong>Lokasi:</strong> {{ weather.name }}</p>
        <p><strong>Temperatur:</strong> {{ weather.main.temp }} °C</p>
        <p><strong>Cuaca:</strong> {{ weather.weather[0].description }}</p>
      </q-card-section>

      <q-card-section v-else class="placeholder">
        <p>Masukkan nama kota untuk melihat cuaca saat ini.</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidget',
  data() {
    return {
      weather: null,
      city: '',
      API_KEY: '2766fa1365c6f76bffbb56c65dca0377',
      BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
      UNITS: 'metric'
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const response = await fetch(`${this.BASE_URL}?q=${this.city}&units=${this.UNITS}&appid=${this.API_KEY}`);
        const data = await response.json();
        this.weather = data;
        this.updateBackground(this.weather.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    updateWeather() {
      this.fetchWeather();
    },
    updateBackground(temp) {
      const body = document.body;
      body.classList.remove('cold-weather', 'cool-weather', 'warm-weather', 'hot-weather');

      if (temp <= 0) {
        body.classList.add('cold-weather');
      } else if (temp > 0 && temp <= 20) {
        body.classList.add('cool-weather');
      } else if (temp > 20 && temp <= 30) {
        body.classList.add('warm-weather');
      } else {
        body.classList.add('hot-weather');
      }
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>

<style scoped>
.weather-widget {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-position: 2px;
  background-size: cover; /* Menyesuaikan ukuran gambar dengan elemen */
  background-repeat: no-repeat; /* Menghindari pengulangan gambar */
}

.widget-card {
  width: 300px;
  border-radius: 20px;
  background: linear-gradient(to bottom, #bdc3c7, #e0e0e0);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
}

.widget-card h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.input-field {
  width: 100%;
  margin-bottom: 10px;
}

.search-btn {
  width: 100%;
}

.weather-info {
  text-align: center;
  padding: 10px;
}

.placeholder {
  text-align: center;
  padding: 10px;
  color: #777;
}

/* Background styles based on temperature */
body.cold-weather {
  background-color: #4488ff; /* Cold blue */
}

body.cool-weather {
  background-color: #66aabb; /* Cool teal */
}

body.warm-weather {
  background-color: #ffb347; /* Warm orange */
}

body.hot-weather {
  background-color: #ff6961; /* Hot red */
}
</style>
