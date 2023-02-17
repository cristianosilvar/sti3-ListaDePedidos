import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import BestSellers from './pages/BestSellers'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Home>
            <Routes>
              <Route path='/' element={<Orders/>} />
              <Route path='/best-sellers' element={<BestSellers/>} />
              <Route path='/*' element={<NotFound/>} />
              {/* <Route path='/orders/:id' element={<Order/>}/> */}
            </Routes>
          </Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
