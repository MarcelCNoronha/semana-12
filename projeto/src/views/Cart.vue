<template>
  <v-container class="my-8">
    <v-row>
      <v-col cols="12">
        <v-table class="mt-15 mx-3">
          <thead>
            <tr>
              <th class="text-left">Imagem</th>
              <th class="text-left">Nome</th>
              <th class="text-left">Quantidade</th>
              <th class="text-left">Preço</th>
              <th class="text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
              <td><img :src="item.imagem" width="40" /></td>
              <td>{{ item.nome }}</td>
              <td>
                <!-- Botão de diminuir quantidade -->
                <v-btn @click="diminuirQuantidade(item)" icon>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
               <span class="mx-3">{{ item.quantidade }}</span> 
                <v-btn @click="aumentarQuantidade(item)" icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </td>
              <td>{{ item.preco }}</td>
              <td>
               <span class="mx-10">
                {{
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.quantidade * item.preco)
                }}
               </span> 
                <v-btn  @click="removerProduto(item)" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>

              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    produtosCarrinho() {
      return this.$store.state.produtosCarrinho;
    },
  },
  methods: {
    removerProduto(produto) {
      this.$store.dispatch("removerProduto", { produto });
    },
    aumentarQuantidade(produto) {
      this.$store.commit("aumentarQuantidade", produto);
    },
    diminuirQuantidade(produto) {
      this.$store.commit("diminuirQuantidade", produto);
    },
  },
};
</script>