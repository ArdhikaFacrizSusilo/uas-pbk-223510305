<template>
  <div class="app-container q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-green text-white">
      <p class="title">DikaaWeather</p>
      
      <template v-slot:action>
        <div class="q-pa-md">
          <q-btn-dropdown
            split
            color="blue"
            rounded
            label="TUGAS ARDHIKA 1 - 7"
          >
            <q-list>
              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas1' }">
                <q-item-section>
                  <q-item-label>Tugas 1</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas2' }">
                <q-item-section>
                  <q-item-label>Tugas 2</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas3' }">
                <q-item-section>
                  <q-item-label>Tugas 3</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas4' }">
                <q-item-section>
                  <q-item-label>Tugas 4</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas5' }">
                <q-item-section>
                  <q-item-label>Tugas 5</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas6' }">
                <q-item-section>
                  <q-item-label>Tugas 6</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup tag="router-link" :to="{ name: 'Tugas7' }">
                <q-item-section>
                  <q-item-label>Tugas 7</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </template>
    </q-banner>
    <WeatherWidget :apiKey="'YOUR_OPENWEATHERMAP_API_KEY'"/>
    <footer class="footer bg-green-7 text-white q-pa-md">
      <div class="container text-center">
        <p>&copy; 2024 Ardhika Facriz Susilo | 223510305 | UAS praktikum pbk</p>
        <div class="footer-links">
          <a href="https://github.com/ArdhikaFacrizSusilo?tab=repositories" target="_blank">
            <i class="bi bi-github"></i> GitHub
          </a>
          <a href="https://instagram.com/ArdhikaFacrizSusilo" target="_blank">
            <i class="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  components: {
    WeatherWidget
  }
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.q-banner {
  flex: 0 1 auto;
}

.weather-widget {
  flex: 1 1 auto;
}

.footer {
  flex: 0 1 auto;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-links i {
  margin-right: 5px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  margin: 0;
}

</style>
