<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Añade nueva película al videoclub</div>
        <v-form 
        ref = "form"
        v-model="valid"
        lazy-validation
        >
          <v-text-field
            v-model="name"
            masked="true"
            label="Título"
            prepend-icon="mdi-format-title"
            :rules="[
              required
            ]"
          />
          <v-text-field
            v-model="description"
            label="Descripción"
            prepend-icon="mdi-image-text"
            :rules="[
              required
            ]"
          />
            <v-text-field
              v-model="quantity"
              label="Nº copias"
              prepend-icon="mdi-numeric"
              type="number"
              :rules="[
                required
              ]"
            />
          <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
          :rules="[
            required
          ]"
          ></v-rating>
        </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      type="submit"
      @click="validate"
      :disabled="!valid"
      :loading="loading"
      >
        <v-icon dark>
        mdi-plus
        </v-icon>
      </v-btn>
      
    </v-card-actions>

      <v-snackbar
      v-model="snackbar"
    >
      Película añadida con éxito.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-alert v-if="error" :dismissible="true" @click='error = ""' type="error">
      {{ error }}
    </v-alert>
  </v-card>
</template>
<script>

import firebase from "firebase/app";
import 'firebase/auth';
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  ... mapState('market',['market']),
  data: () => ({
    firebase,
    
    name: '', 
    quantity: '',
    rating: 0,
    description: '',
    valid: true,
    error: "",
    loading: false,
    snackbar: false
  }),
  methods: {
      ...mapActions('market',["addFilm"]),
      async addItem () {   
        this.loading = true
        try{
          await this.addFilm({name: this.name, quantity: this.quantity, rating: this.rating, description: this.description, contVal: 1 })
          this.snackbar = true
        } catch (Error){
          this.error = "Error al añadir la película."
          this.snackbar = true
        }
        this.loading = false

      },
      async validate(){
        if (this.$refs.form.validate()){
          this.addItem()
        }
      }, 
      required(valor){
        if (valor == ""){
          return "No puede ser un campo vacío."
        } 
        return true
      }
      
  }
}
</script>
