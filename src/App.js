import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

  }, []);

  return (
    <div id='inner-app-div' className=''>
      <Header />
      <main className='mb-[100vh]'>
        <Home />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
