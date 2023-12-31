import Footer from '../components/footer';
import Header from '../components/header';
import ScrollTop from '../libs/scrollTop';

export default function Layout({ children }) {
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
