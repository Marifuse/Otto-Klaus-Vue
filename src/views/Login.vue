<template>
  <div>
    <v-app class="pink darken-1">
      <v-card width='400px' class="mx-auto my-auto red lighten-5" >
        <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">Otto Klaus Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label='Usuario' 
            prepend-icon='mdi-account-circle'
            v-model="user"
            color="purple darken-1"
            />
            <v-text-field label='Contraseña' :type="showPassword ? 'text' : 'password'"
              prepend-icon='mdi-lock'
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              color="purple darken-1"
              />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <div class=" my-5 text-center">
          <v-btn color='purple' dark @click="login">Login</v-btn>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  methods: {
    login() {
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() => {
        this.$router.push('/toys')
        alert(`Bienvenid@ ${this.user}`)
      }).catch(() => {
        alert('Datos Ingresados no Válidos... Vuelve a Ingresar tus Credenciales')
      })
    }
  },
}
</script>

<style>

</style>