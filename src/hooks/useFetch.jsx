import { useState, useEffect } from "react";

export const useFetch = (reload, setReload) => {
    const url = 'https://desafiotecnicosti3.azurewebsites.net/pedido'

    const [data, setData] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)

                const res = await fetch(url)
                const json = await res.json()
                
                setData(json)

                setLoading(false)
            } catch (error) {
                setError('Ocorreu algum erro ao carregar os dados')
            }
        }

        setReload(false)
        fetchData()

    }, [url, reload])
    /* 
    const agora = (id, name, email, cpf) => {
        setData(null)
        
        data.map((order) => {
            if (order.id == id) {

                let orderEdited = {}

                orderEdited = {
                    "id": id,
                    "numero": order.numero,
                    "dataCriacao": order.dataCriacao,
                    "dataAlteracao": order.dataAlteracao,
                    "status": order.status,
                    "desconto": order.desconto,
                    "frete": order.frete,
                    "subTotal": order.subTotal,
                    "valorTotal": order.valorTotal,
                    "cliente": {
                        "id": order.cliente.id,
                        "cnpj": order.cliente.cnpj,
                        "cpf": cpf,
                        "nome": name,
                        "razaoSocial": order.cliente.razaoSocial,
                        "email": email,
                        "dataNascimento": order.cliente.dataNascimento
                    },
                    "enderecoEntrega": order.enderecoEntrega,
                    "itens": order.itens,
                    "pagamento": order.pagamento
                }

                setData([...data, orderEdited])
            } else {
                setData([...data, order])
            }
        })
    } */

    return {data, loading, error}
}
