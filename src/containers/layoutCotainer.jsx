import Footer from '../components/footer';
import Header from '../components/header';
import ScrollTop from '../libs/scrollTop';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollTop />
      <div className='pt-[90px] pb-[10px]   flex flex-col justify-center items-center'>
        {children}
      </div>
      <Footer />
    </>
  );
}
