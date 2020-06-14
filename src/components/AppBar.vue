<template>
  <div>
    <v-app-bar
      app
      color="pink darken-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Otto Klaus</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="logout"
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
    logout() {
      Firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    }
  },

}
</script>

<style>

</style>