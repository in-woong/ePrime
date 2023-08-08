import Footer from '../components/footer';
import Header from '../components/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='pt-[90px] pb-[10px] min-h-full min-w-[1400px] flex flex-col justify-center items-center'>
        {children}
      </div>
      <Footer />
    </>
  );
}
