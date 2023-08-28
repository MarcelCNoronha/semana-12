<template>
    <v-card elevation="5" class="mx-auto my-3 align-center" width="300">
      <v-card-text class="d-flex flex-column align-center justify-center">
        <v-img width="200" :src="imagem"></v-img>
        <span>{{ nome }}</span>
        <span><b>{{ "10x de R$ " + parcela }}</b></span>
        <span>{{ "R$ " + preco }}</span>
      </v-card-text>
    </v-card>
  </template>
<script>
export default {
  props: ["id", "imagem", "nome", "preco", "parcela"],
};
</script>

<style></style>
