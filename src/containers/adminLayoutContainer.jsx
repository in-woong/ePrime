import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import ScrollTop from '../libs/scrollTop';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('key');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='min-w-[1250px]'>
      <Header />
      <ScrollTop />
      <div className='pt-[90px] flex flex-col justify-center items-center'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
