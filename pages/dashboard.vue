<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    >
    <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-pagination>
  </div>
  
  
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>