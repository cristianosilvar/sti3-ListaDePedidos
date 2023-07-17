import './style/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import { OrdersProvider } from './context/OrdersContext';

function App() {
  return (
    <OrdersProvider>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='orders/:id' element={<Order/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </OrdersProvider>
  );
}

export default App;
