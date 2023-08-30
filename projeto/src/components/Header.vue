<template>
  <v-layout>
    <v-app-bar color="blue">
      <v-app-bar-title
        ><RouterLink class="text-decoration-none white-text" to="/"> Funko Lab</RouterLink>
      </v-app-bar-title>
      <v-btn icon>
        <RouterLink class="text-decoration-none white-text" to="/carrinho">
          {{ this.$store.state.produtosCarrinho.length }}
          <v-icon color="#FFF">mdi-cart</v-icon>
        </RouterLink>
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.white-text {
  color: white; /* Define a cor do texto como branco */
}
</style>
