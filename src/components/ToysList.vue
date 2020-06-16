<template>
  <div>              
    <h2 class="text-center">Inventario de Juguetes</h2>
    <v-simple-table fixed-header class="my-8 pa-5 d-flex justify-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Código</th>
            <th class="text-left">Stock</th>
            <th class="text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="toy in toys" :key="toy.id">
            <td>{{ toy.data.name }}</td>
            <td>{{ toy.data.code }}</td>
            <td>{{ toy.data.stock }}</td>
            <td>{{ toy.data.price }}</td>
            <td>
              <v-btn color="pink darken-1" fab small dark><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn class= 'mx-4' color="purple darken-4" fab small dark><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>      
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([ 'setToys' ])
  },
  computed: {
    ...mapState(['toys'])
  },
  created() {
    this.setToys()
  }
}
</script>

<style>

</style>