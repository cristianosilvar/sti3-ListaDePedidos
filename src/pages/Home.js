import './Home.css'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Home({children}) {
    const [page,setPage] = useState('orders')

    return (
        <section>
        {
            page === 'orders' && 
            <div className='top'>   
                <div>
                    <h1>Listagem de pedidos</h1>
                    <h3 className='fw-normal'>Aqui você poderá visualizar todos os pedidos emitidos.</h3>
                </div>
                <button className='button-consult fw-medium'>Consultar</button>
            </div>
        }
        {
            page === 'best-sellers' &&  
            <div className='top'>  
                <div>
                    <h1>Produtos mais vendidos</h1>
                    <h3 className='fw-normal'>Aqui você poderá observar um ranking com os produtos mais vendidos</h3>
                </div>
                <button className='button-consult fw-medium'>Consultar</button>
            </div>
        }
            <div>
                <div className='navBar'>
                    <NavLink 
                    to='/' 
                    className='navBar-orders'
                    onClick={() => setPage('orders')}
                    >Pedidos</NavLink>
                    <NavLink 
                    to='/best-sellers' 
                    className='navBar-bestSellers'
                    onClick={() => setPage('best-sellers')}
                    >Produtos mais vendidos</NavLink>
                </div>
                {children}
            </div>
        </section>
    )
}