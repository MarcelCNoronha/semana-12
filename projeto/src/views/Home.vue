<template>
  <v-row class="mt-15 mx-3">
    <CardProduto
      v-for="produto in listaProdutos"
      :key="produto.id"
      :id="produto.id"
      :imagem="produto.imagem"
      :nome="produto.nome"
      :preco="produto.preco"
      :parcela="produto.parcela"
      @adicionar="() => this.$store.dispatch('adicionarProduto', { produto })"
    />
  </v-row>
</template>

<script>
import CardProduto from "../components/CardProduto.vue";
import axios from "axios";
export default {
  components: {
    CardProduto,
  },
  data() {
    return {
      listaProdutos: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:50001/produtos")
      .then((res) => (this.listaProdutos = res.data))
      .catch((erro) => console.log(erro));
  },
};
</script>

<style scoped></style>
