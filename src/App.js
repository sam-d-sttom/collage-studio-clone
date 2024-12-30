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
import SkeletonLoader from './components/SkeletonLoader';


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

        {/* <SkeletonLoader /> */}

        {/* <div className="flex flex-col sssm:h-[30vh] md:h-[70vh] min-h-[400px] w-[24%]">
          <div className="h-[300px] ">
            <SkeletonLoader width='w-full' height='h-full' borderRadius='rounded-none' />
          </div>
          <div>
            <div className="flex justify-between w-full h-6 items-center bg-transparent pr-4">
              <SkeletonLoader width='w-[25%]' height='h-4' borderRadius='rounded-none' />
              <SkeletonLoader width='w-[65%]' height='h-4' borderRadius='rounded-none' />
            </div>
            <div className="flex justify-between w-full h-6 items-center bg-transparent pr-4">
              <SkeletonLoader width='w-[25%]' height='h-4' borderRadius='rounded-none' />
              <SkeletonLoader width='w-[65%]' height='h-4' borderRadius='rounded-none' />
            </div>
            <div className="flex justify-between w-full h-6 items-center bg-transparent pr-4">
              <SkeletonLoader width='w-[25%]' height='h-4' borderRadius='rounded-none' />
              <SkeletonLoader width='w-[65%]' height='h-4' borderRadius='rounded-none' />
            </div>
            <div className="flex justify-between w-full h-6 items-center bg-transparent pr-4">
              <SkeletonLoader width='w-[25%]' height='h-4' borderRadius='rounded-none' />
              <SkeletonLoader width='w-[65%]' height='h-4' borderRadius='rounded-none' />
            </div>
          </div>
        </div> */}
      </main >

      <Footer />
    </div >
  );
}

export default App;
