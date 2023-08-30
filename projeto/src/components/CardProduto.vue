<template>
  <v-card elevation="5" class="mx-auto my-3 d-flex flex-column" width="300">
    <v-card-text class="d-flex flex-column align-center">
      <v-img class="" width="300" :src="imagem"></v-img>
      <div class="d-flex flex-column text-h4">
        <span>{{ nome }}</span>
      <span
        ><b>{{ "10x de R$ " + parcela }}</b></span
      >
      <span>{{ "R$ " + preco }}</span>
      </div>

    </v-card-text>
    <v-card-actions
    class="d-flex align-end justify-end ma-3">
      <v-btn 
      variant="outlined"
      color="red" 
      @click="$emit('adicionar', id)"
      >Comprar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["id", "imagem", "nome", "preco", "parcela"],
};
</script>

<style></style>
