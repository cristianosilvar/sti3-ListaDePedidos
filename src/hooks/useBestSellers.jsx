import { useFetch } from "./useFetch"

export default function useBestSellers(orders) {

    // Pega todos os IDs de Produtos
    let ids = []
    
    if (orders != null) {
        orders.map((order) => {
            if (order.itens) {
                order.itens.map((item) => {
                    if (!ids.includes(item.idProduto)) {
                        ids = [...ids, item.idProduto]

                        let idProduto = item.idProduto
                        let quantidade = 0

                        orders.map((order) => {
                            order.itens.map((item) => {
                                /* if (item.idProduto == idProduto) {
                                    ids = [...ids, item.quantidade]
                                } */

                                if (item.idProduto == idProduto) {
                                    quantidade = quantidade + item.quantidade
                                    ids = [...ids, quantidade]

                                    
                                }

                            
                            })

                        }) 

                        /* if (item.idProduto == item.idProduto) {
                            godHelp = [...godHelp, item.quantidade]
                        } */
                        console.log(ids)
                        // Pegar a quantidade de venda de cada ID
                        //if (item.idProduto == ids[ids.length - 1]) {}

                    }
                }
                )
            }
        }
        )
    }

    // Pegar a quantidade de venda de cada ID



    return {ids}
}