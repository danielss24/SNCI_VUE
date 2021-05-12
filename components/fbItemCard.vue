<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
         {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
        <v-list-item-subtitle>{{ quantity }}</v-list-item-subtitle>

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
</template>

