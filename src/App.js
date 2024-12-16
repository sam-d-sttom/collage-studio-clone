import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/products/Products';
import { useDispatch } from "react-redux";
import { updateProductsInCart } from './redux/features/cart/cart';


function App() {
  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {

    const lenis = new Lenis({
      autoRaf: true,
    });

  }, []);

  

  return (
    <div id='inner-app-div' className=''>
      <Header />

      <main className='mb-[100vh]'>
        <Routes>
          <Route path='/' element={<Home REACT_APP_API_BASE_URL={REACT_APP_API_BASE_URL}/>} />
          <Route path='/products/:attribute?/:type?' element={<Products REACT_APP_API_BASE_URL={REACT_APP_API_BASE_URL}/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
