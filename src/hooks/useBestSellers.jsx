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