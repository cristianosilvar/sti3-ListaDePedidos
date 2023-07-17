export default function useProducts(orders) {

    let ids = []
    let quantidadeTotal = []
    let produtos = []
    let produto = {}
    
    if (orders != null) {
        orders.map((order) => {
            if (order.itens) {
                order.itens.map((item) => {

                    // Se o id do produto não estiver no array 'ids' ele será adicionado, evitando adicionar o id do mesmo produto

                    if (!ids.includes(item.idProduto)) {

                        let idProduto = item.idProduto
                        let quantidade = 0

                        ids = [...ids, idProduto]

                        // Nesse 'map' é somado o total vendido do mesmo produto

                        orders.map((order) => {
                            order.itens.map((item) => {

                                if (item.idProduto == idProduto) {
                                    quantidade = quantidade + item.quantidade
                                    quantidadeTotal = [...quantidadeTotal, quantidade]
                                }
                            })

                        })

                        // Aqui é passado um objeto para 'produto' com os valores necessários

                        produto = {
                            "id": idProduto,
                            "nome": item.nome,
                            "valorUnitario": item.valorUnitario,
                            "valorTotal": item.valorUnitario * quantidadeTotal[quantidadeTotal.length - 1],
                            "quantidade": quantidadeTotal[quantidadeTotal.length - 1]
                        }

                        // Por fim esse produto é adicionado no array e o processo é realizado com  o próximo id que ainda não estiver incluido no array 'ids'
                        
                        produtos = [...produtos, produto]
                    }
                })
            }
        })
    }

    return {produtos}
}