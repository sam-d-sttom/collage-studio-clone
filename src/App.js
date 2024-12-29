import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/products/Products';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import { useDispatch } from "react-redux";
import { updateProductsInCart } from './redux/features/cart/cart';
import ShoppingBag from './components/ShoppingBag';
import NavBar from './components/NavBar';
import { useMotionValue } from 'motion/react';
import Nav from './components/Nav';


function App() {
  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {

    const lenis = new Lenis({
      autoRaf: true,
    });

  }, []);


  return (
    <div className='tracking-tighter'>
      <Header />

      <NavBar />

      <ShoppingBag />

      <main className='mb-[100vh] pb-6'>
        <Routes>
          <Route path='/' element={<Home REACT_APP_API_BASE_URL={REACT_APP_API_BASE_URL} />} />
          <Route path='/products/:attribute?/:type?' element={<Products REACT_APP_API_BASE_URL={REACT_APP_API_BASE_URL} />} />
          <Route path='/products/:category/:collection/:product' element={<SingleProductPage REACT_APP_API_BASE_URL={REACT_APP_API_BASE_URL} />} />
        </Routes>

        <div className='my-10'>
          <Nav isUsedInNavBar={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
