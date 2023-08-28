<template>
      <div class="ma-5 d-flex justify-start">
      <h2>Produtos</h2>
    </div>
  <v-row class="my-3 mx-3">
    <CardProduto
      v-for="produto in listaProdutos" 
      :key="produto.id" 
      :id="produto.id" 
      :imagem="produto.imagem"
      :nome="produto.nome" 
      :preco="produto.preco" 
      :parcela="produto.parcela" 
    />
  </v-row>
</template>
  
  <script>
  import CardProduto from "../components/CardProduto.vue"
  import axios from 'axios'
  export default {
    components: {
      CardProduto
    },
    data() {
      return {
        listaProdutos: []
      }
    },
    methods: {
      async AdicionarProduto(id) {
        // editar o medicamento e marcar como favorito
        // o filter retorna sempre um array, por isso vamos sempre usar a posição 0
        let produto = this.listaProdutos.filter(item => item.id == id)
  
        if(!!produto[0]){
          try {
            produto[0].carrinho = !produto[0].favorito
  
            var result = await axios.put(`http://localhost:50001/produtos/${id}`, produto[0])
          } catch (erro) {
            console.log(erro)
          }
        }
      }
    },
    mounted(){
      axios.get('http://localhost:50001/produtos')
      .then(res => this.listaProdutos = res.data)
      .catch(erro => console.log(erro))
    }
  }
  </script>
  
  <style scoped>
  </style>