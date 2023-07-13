import './style/BestSellers.css'

export default function BestSellers() {
    return (
        <div id="best-sellers">
            <div className="card card-yellow text-center">
                <span className='h2 fw-normal'>1º</span>
                <span className='h3'>Camiseta Star Labs</span>
                <span className='h5'>Vendido 6 vezes</span>
                <span className='h5'>Resultou em R$ 190,00</span>
            </div>
            <div className="card card-blue text-center">
                <span className='h2 fw-normal'>2º</span>
                <span className='h3'>Camiseta Star Labs</span>
                <span className='h5'>Vendido 6 vezes</span>
                <span className='h5'>Resultou em R$ 190,00</span>
            </div>
            <div className="card card-orange text-center">
                <span className='h2 fw-normal'>3º</span>
                <span className='h3'>Camiseta Star Labs</span>
                <span className='h5'>Vendido 6 vezes</span>
                <span className='h5'>Resultou em R$ 190,00</span>
            </div>
        </div>
    )
}