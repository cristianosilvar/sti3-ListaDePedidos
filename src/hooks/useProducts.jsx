import { useFetch } from "./useFetch"

export default function useProducts(orders) {

    let ids = []
    let quantidadeTotal = []
    let produtos = []
    let produto = {}
    
    if (orders != null) {
        orders.map((order) => {
            if (order.itens) {
                order.itens.map((item) => {
                    if (!ids.includes(item.idProduto)) {

                        let idProduto = item.idProduto
                        let quantidade = 0

                        ids = [...ids, idProduto]

                        orders.map((order) => {
                            order.itens.map((item) => {

                                if (item.idProduto == idProduto) {
                                    quantidade = quantidade + item.quantidade
                                    quantidadeTotal = [...quantidadeTotal, quantidade]
                                }
                            })

                        })

                        produto = {
                            "id": idProduto,
                            "nome": item.nome,
                            "quantidade": quantidadeTotal[quantidadeTotal.length - 1]
                        }
                        
                        produtos = [...produtos, produto]
                    }
                })
            }
        })
    }

    return {produtos}
}