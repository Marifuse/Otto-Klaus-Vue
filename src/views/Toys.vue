<template>
  <div class="toys-section">
    <app-bar></app-bar>
    <v-main class="d-flex justify-space-between my-6">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="mx-auto">
              <v-card width="900px" class="pa-5 red lighten-5">
              <h1 class="text-center mb-5">Otto Klaus Toys</h1>
              <v-text-field label="Codigo" type="text" v-model="id" outlined color="pink darken-1"/>
              <v-text-field label="Nombre" type="text" v-model="name" outlined color="pink darken-1"/>
              <v-text-field label="Stock" type="number" v-model="stock" outlined color="pink darken-1"/>
              <v-text-field label="Precio" type="number" v-model="price" outlined color="pink darken-1"/>
              <div class="d-flex justify-space-around">
                <v-btn color="pink darken-1" dark>Añadir</v-btn>
                <v-btn color="purple darken-4" dark>Editar</v-btn>
              </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <div class="my-15">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="mx-auto">
              <v-card width="900px" class="pa-5 red lighten-5">
                <h2 class="text-center">Inventario de Juguetes</h2>
                <v-simple-table fixed-header class="my-8 pa-5 d-flex justify-center">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Nombre</th>
                        <th class="text-left">Stock</th>
                        <th class="text-left">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lego Star Wars</td>
                        <td>10000</td>
                        <td>$30000</td>
                        <td>
                          <v-btn color="pink darken-1" fab small dark><v-icon>mdi-pencil</v-icon></v-btn>
                          <v-btn class= 'mx-4' color="purple darken-4" fab small dark><v-icon>mdi-delete</v-icon></v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
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
import Footer from '../components/Footer'
export default {
  components: {
    AppBar,
    Footer
  }
}
</script>

<style>
.toys-section {
  background-color: currentColor;
}
</style>