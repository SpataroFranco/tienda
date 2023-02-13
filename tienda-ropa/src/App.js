import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { Hero } from './components/Hero/Hero';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <Navbar/>
                <Hero/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
