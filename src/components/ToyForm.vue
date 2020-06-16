<template>
  <div class="text-center">
    <v-dialog
      :value="showForm"
      width="500"
      persistent
    >
      <v-card class="pa-5 red lighten-5">
        <h1 class="text-center mb-5">Otto Klaus Toys</h1>
          <v-text-field label="Codigo" type="text" :value="currentToy.data.code" @input="updateCode" outlined color="pink darken-1"/>
          <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName" outlined color="pink darken-1"/>
          <v-text-field label="Stock" suffix="unidades" :value="currentToy.data.stock" @input="updateStock" outlined color="pink darken-1"/>
          <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice" outlined color="pink darken-1"/>    
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink darken-1" dark @click="submitForm">Añadir</v-btn>
          <v-btn color="purple darken-4" dark>Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['hideToyForm', 'updateCode', 'updateName', 'updateStock', 'updatePrice', 'postToy']),
    submitForm() {
      this.postToy()
      this.hideToyForm()
    }
  },
  computed: {
    ...mapState(['showForm', 'currentToy']),
  }
}
</script>

<style>

</style>