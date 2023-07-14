import './style/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { useFetch } from './hooks/useFetch';

import Home from './pages/Home/Home'
import BestSellers from './pages/BestSellers/BestSellers'
import Orders from './pages/Orders/Orders'
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import { OrdersProvider } from './context/OrdersContext';

function App() {
  const url = 'https://desafiotecnicosti3.azurewebsites.net/pedido'
  const {data: orders, loading, error} = useFetch(url)

  return (
    <OrdersProvider value={{orders, loading, error}}>
      <div className="App">
        <BrowserRouter>
          <Header/>
            <Home>
              <Routes>
                <Route path='/' element={<Orders orders={orders} loading={loading} error={error}/>} />
                <Route path='/best-sellers' element={<BestSellers/>} />
                <Route path='/*' element={<NotFound/>} />
                {/* <Route path='/orders/:id' element={<Order/>}/> */}
              </Routes>
            </Home>
        </BrowserRouter>
      </div>
    </OrdersProvider>
  );
}

export default App;
