import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      produtosCarrinho: [],
    };
  },
  mutations: {
    adicionarProdutoAoCarrinho(state, produtoRecebido) {
      const produtoNoCarrinho = state.produtosCarrinho.find(
        (produto) => produto.id === produtoRecebido.id
      );
      if (produtoNoCarrinho) {
        state.produtosCarrinho = state.produtosCarrinho.map((item) => {
          if (item.id === produtoRecebido.id) {
            item.quantidade = item.quantidade + 1;
          }
          return item;
        });
      } else {
        state.produtosCarrinho = [
          ...state.produtosCarrinho,
          {
            ...produtoRecebido,
            quantidade: 1,
          },
        ];
      }
    },

  removerProdutoDoCarrinho(state, produtoParaRemover) {
      state.produtosCarrinho = state.produtosCarrinho.filter(
        (produto) => produto.id !== produtoParaRemover.id
      );
    },
    aumentarQuantidade(state, produto) {
      const produtoNoCarrinho = state.produtosCarrinho.find(
        (item) => item.id === produto.id
      );
      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1;
      }
    },
    diminuirQuantidade(state, produto) {
      const produtoNoCarrinho = state.produtosCarrinho.find(
        (item) => item.id === produto.id
      );
      if (produtoNoCarrinho && produtoNoCarrinho.quantidade > 1) {
        produtoNoCarrinho.quantidade -= 1;
      }
    },
  },
  actions: {
    adicionarProduto(context, value) {
      context.commit("adicionarProdutoAoCarrinho", value.produto);
    },
    removerProduto(context, value) {
      context.commit("removerProdutoDoCarrinho", value.produto);
    },
  },
});

export default store;
