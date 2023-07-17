import './style/BestSellers.css'

import spinner from '../../assets/spinner.svg'

import useProducts from '../../hooks/useProducts'
import { useEffect, useState } from 'react'

import { useOrdersValue } from '../../context/OrdersContext'

export default function BestSellers() {

    const {orders, loading, error} = useOrdersValue()
    const { produtos } = useProducts(orders)

    const [type, setType] = useState('quantity')
    
    const [top1, setTop1] = useState({})
    const [top2, setTop2] = useState({})
    const [top3, setTop3] = useState({})
    const [top4, setTop4] = useState({})
    const [top5, setTop5] = useState({})


    useEffect(() => {
        if (type === 'value') {   
            produtos.sort(function(a, b) {
            if(a.valorTotal > b.valorTotal) { 
                // Se o 'a' for maior que 'b' retorna -1 e muda a posição
                return -1
            } else {
                // Caso contrário continua em sua posição
                return true
            }
            })
            
            setTop1(produtos[0])
            setTop2(produtos[1])
            setTop3(produtos[2])
            setTop4(produtos[3])
            setTop5(produtos[4])

        } else {   
            produtos.sort(function(a, b) {
           if(a.quantidade > b.quantidade) { 
               // Se o 'a' for maior que 'b' retorna -1 e muda a posição
               return -1
           } else {
               // Caso contrário continua em sua posição
               return true
           }
           })
            
           setTop1(produtos[0])
           setTop2(produtos[1])
           setTop3(produtos[2])
           setTop4(produtos[3])
           setTop5(produtos[4])

        }
    },[type])


    return (
        <div id="best-sellers">
            {
                orders && !loading &&
                <>
                    <div className="type">
                        <h4 className='fw-normal'>Classificar Por:  </h4>
                        <select name="" id="select_type" className='select_type' onChange={() => setType(document.getElementById('select_type').value)}>
                            <option value="value">Valor Total</option>
                            <option value="quantity">Quantidade Vendida</option>
                        </select>
                    </div>
                    <div className="cards">    
                        <div className="card card-yellow text-center">
                            <span className='h2 fw-normal'>1º</span>
                            <span className='h3'>{top1 ? top1.nome : ''}</span>
                            <span className='h5'>Vendido {top1 ? top1.quantidade : ''} vezes</span>
                            <span className='h5'>Resultou em R$ {top1 ? parseFloat(top1.valorTotal).toFixed(2).replace('.',',') : ''}</span>
                        </div>
                        <div className="card card-blue text-center">
                            <span className='h2 fw-normal'>2º</span>
                            <span className='h3'>{top2 ? top2.nome : ''}</span>
                            <span className='h5'>Vendido {top2 ? top2.quantidade : ''} vezes</span>
                            <span className='h5'>Resultou em R$ {top2 ? parseFloat(top2.valorTotal).toFixed(2).replace('.',',') : ''}</span>
                        </div>
                        <div className="card card-orange text-center">
                            <span className='h2 fw-normal'>3º</span>
                            <span className='h3'>{top3 ? top3.nome : ''}</span>
                            <span className='h5'>Vendido {top3 ? top3.quantidade : ''} vezes</span>
                            <span className='h5'>Resultou em R$ {top3 ? parseFloat(top3.valorTotal).toFixed(2).replace('.',',') : ''}</span>
                        </div>
                        <div className="card card-gray text-center">
                            <span className='h2 fw-normal'>4º</span>
                            <span className='h3'>{top4 ? top4.nome : ''}</span>
                            <span className='h5'>Vendido {top4 ? top4.quantidade : ''} vezes</span>
                            <span className='h5'>Resultou em R$ {top4 ? parseFloat(top4.valorTotal).toFixed(2).replace('.',',') : ''}</span>
                        </div>
                        <div className="card card-gray text-center">
                            <span className='h2 fw-normal'>5º</span>
                            <span className='h3'>{top5 ? top5.nome : ''}</span>
                            <span className='h5'>Vendido {top5 ? top5.quantidade : ''} vezes</span>
                            <span className='h5'>Resultou em R$ {top5 ? parseFloat(top5.valorTotal).toFixed(2).replace('.',',') : ''}</span>
                        </div>
                    </div>
                    <div></div>
                </>
            }
            {error && <h5>{error}</h5>}
            {loading &&
                <div className="loading">    
                    <img src={spinner} alt="Carregando dados..." className='loading-image'/>
                    <span className='h6'>Carregando</span>
                </div>
            }
        </div>
    )
}