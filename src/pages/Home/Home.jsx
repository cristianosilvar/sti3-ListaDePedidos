import './style/Home.css'

import { BrowserRouter, Routes, NavLink, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import useDate from '../../hooks/useDate'
import Orders from '../Orders/Orders'
import BestSellers from '../BestSellers/BestSellers'
import { useOrdersValue } from '../../context/OrdersContext'
import { useFetch, useReloadFetch } from '../../hooks/useFetch'

export default function Home() {
    const [page,setPage] = useState('orders')

    const {setReload} = useOrdersValue()

    return (
        <section>
        {
            page === 'orders' && 
            <>
                <div className='top'>   
                    <div>
                        <h1>Listagem de pedidos</h1>
                        <h3 className='fw-normal'>Aqui você poderá visualizar todos os pedidos emitidos.</h3>
                    </div>
                    <button className='button-consult fw-medium' onClick={() => setReload(true)}>Consultar</button>
                </div>
                <div className='navBar'>
                    <NavLink 
                    to='/' 
                    className='active'
                    onClick={() => setPage('orders')}
                    >Pedidos</NavLink>
                    <NavLink 
                    to='/' 
                    className={({page}) => (page == 'best-sellers'  ? 'active' : '')}
                    onClick={() => setPage('best-sellers')}
                    >Produtos mais vendidos</NavLink>
                </div>
                <Orders/>
            </>
        }
        {
            page === 'best-sellers' &&  
            <>
                <div className='top'>  
                    <div>
                        <h1>Produtos mais vendidos</h1>
                        <h3 className='fw-normal'>Aqui você poderá observar um ranking com os produtos mais vendidos</h3>
                    </div>
                </div>
                <div className='navBar'>
                    <NavLink 
                    to='/' 
                    className={({page}) => (page == 'orders' ? 'active' : '')}
                    onClick={() => setPage('orders')}
                    >Pedidos</NavLink>
                    <NavLink 
                    to='/' 
                    className='active'
                    onClick={() => setPage('best-sellers')}
                    >Produtos mais vendidos</NavLink>
                </div>
                <BestSellers/>
            </>
        }
        </section>
    )
}