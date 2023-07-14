import useProducts from '../../hooks/useProducts'
import './style/BestSellers.css'

export default function BestSellers({orders, loading, error}) {
    const { produtos } = useProducts(orders)
    
    // Ordernar conforme a quantidade de vendas 
    produtos.sort(function(a, b) {
        if(a.quantidade > b.quantidade) { 
            // Se o a for maior que b retorna -1 e muda a posição
            return -1
        } else {
            // Caso contrário continua em sua posição
            return true
        }
    })

    const top1 = produtos[0]
    const top2 = produtos[1]
    const top3 = produtos[2]

    return (
        <div id="best-sellers">
            <div className="card card-yellow text-center">
                <span className='h2 fw-normal'>1º</span>
                <span className='h3'>{top1.nome}</span>
                <span className='h5'>Vendido {top1.quantidade} vezes</span>
                <span className='h5'>Resultou em R$ {parseFloat(top1.valorTotal).toFixed(2).replace('.',',')}</span>
            </div>
            <div className="card card-blue text-center">
                <span className='h2 fw-normal'>2º</span>
                <span className='h3'>{top2.nome}</span>
                <span className='h5'>Vendido {top2.quantidade} vezes</span>
                <span className='h5'>Resultou em R$ {parseFloat(top2.valorTotal).toFixed(2).replace('.',',')}</span>
            </div>
            <div className="card card-orange text-center">
                <span className='h2 fw-normal'>3º</span>
                <span className='h3'>{top3.nome}</span>
                <span className='h5'>Vendido {top3.quantidade} vezes</span>
                <span className='h5'>Resultou em R$ {parseFloat(top3.valorTotal).toFixed(2).replace('.',',')}</span>
            </div>

            {
            }
        </div>
    )
}