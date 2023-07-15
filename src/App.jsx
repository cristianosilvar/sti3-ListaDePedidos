import './style/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { useFetch } from './hooks/useFetch';

import Home from './pages/Home/Home'
import BestSellers from './pages/BestSellers/BestSellers'
import Orders from './pages/Orders/Orders'
import Order from './pages/Order/Order'
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import { OrdersProvider } from './context/OrdersContext';

function App() {
  return (
    <OrdersProvider/*  value={{orders, loading, error}} */>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='orders/:id' element={<Order/>} />
          </Routes>
        
        
        {/* 
          <Header/>
          <Home>
            <Routes>
              <Route path='/' element={<Orders/>} />
              <Route path='/best-sellers' element={<BestSellers/>} />
            </Routes>
          </Home>
          <Routes>
            <Route path='/*' element={<NotFound/>} />
            <Route path='/orders/:id' element={<Order/>}/>
          </Routes> */}
        </BrowserRouter>
      </div>
    </OrdersProvider>
  );
}

export default App;
