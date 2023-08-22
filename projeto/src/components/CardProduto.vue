<template>
    <v-card elevation="5" class="ma-3" width="400">
      <v-card-text class="d-flex flex-column">
       
        <v-img width="200" :src="imagem"></v-img>
        <span>{{ nome }}</span>
        <span><b>{{ "10x de R$" + parcela }}</b></span>
        <span>{{ "R$" + preco }}</span>
      </v-card-text>
    </v-card>
  </template>
<script>
export default {
  props: ["id", "imagem", "nome", "preco", "parcela"],
};
</script>

<style></style>
