import Footer from '../components/footer';
import Header from '../components/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='pt-[100px] pb-[10px] min-h-full flex flex-col justify-center items-center'>
        {children}
      </div>
      <Footer />
    </>
  );
}
