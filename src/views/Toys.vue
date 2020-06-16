<template>
    <div class="toys-section">
      <app-bar></app-bar>
      <v-main>
        <div>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" class="mx-auto">
                <div class="text-center mb-5">
                  <v-btn color="pink darken-1" dark @click="displayToyForm">Agregar Nuevo Juguete</v-btn>
                </div>
                <v-card width="900px" class="pa-5 red lighten-5">
                <toys-list></toys-list>
                <toy-form></toy-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-main>
      <Footer></Footer>
    </div>
</template>

<script>
import AppBar from '../components/AppBar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import Footer from '../components/Footer'

import { mapActions } from 'vuex'

export default {
  components: {
    AppBar,
    ToysList,
    ToyForm,
    Footer
  },
  methods: {
    ...mapActions(['displayToyForm'])
  }
}
</script>

<style>
.toys-section {
  background-color: currentColor;
}
</style>