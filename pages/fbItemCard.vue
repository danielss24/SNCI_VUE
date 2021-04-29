<template>
<v-hover v-slot="{ hover }">
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
  <v-img
      :aspect-ratio="16/9"

      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title v-if="!hover">Name</v-card-title>
      <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Descripcion
          </div>
        </v-expand-transition>
    </v-img>
    <v-list-item three-line>
      <v-list-item-content>

        <v-list-item-subtitle>description</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
          <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
          ></v-rating>
    </v-card-actions>
    <v-card-actions>
        <v-list-item-subtitle>
            quantity
        </v-list-item-subtitle>

      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
        >
        <v-icon dark>
            mdi-minus
        </v-icon>
    </v-btn>
    <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
        >
        <v-icon dark>
            mdi-plus
        </v-icon>
    </v-btn>
    
    </v-card-actions>
  </v-card>
</v-hover>

</template>

