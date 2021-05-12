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
              :rules="[
                required,
                rulesStock
              ]"
            />
          <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
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
      :disabled="valid"
      :loading="loading"
      >
        <v-icon dark>
        mdi-plus
        </v-icon>
      </v-btn>
      
    </v-card-actions>

    <v-alert
    type="type"
    :value="validAlertOk"
    >Película añadida con éxito.</v-alert>
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
    erros: [],
    loading: false,
    alertMsg: '',
    type: null
  }),

  methods: {
      ...mapActions('market',["addFilm"]),
      async addItem () {
        if (valid == true){
          this.validAlertOk = true
          new Promise(resolve => setTimeout(resolve, 1000))
          this.validAlertOk = false
          this.addFilm({name: this.name, quantity: this.quantity, rating: this.rating, description: this.description, contVal: 1 })
        } else {

        }
      },
      async validate(){
        this.loading = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (this.$refs.form.validate()){
          this.loading = false
          //this.addItem()
          this.type = 'success'
          
        await new Promise(resolve => setTimeout({
          
        }, 1000))


        } else {
          this.loading = false
        }

      }, 
      required(valor){
        if (valor == ""){
          this.erros.push("No puede ser un campo vacío.")
          return false
        }
        return true

      },
      rulesStock(valor){
        if (Number.isInteger(valor) == false){
          this.erros.push("Debe ser un número.")
          return false
        }
        return true
      }  
  }
}
</script>
