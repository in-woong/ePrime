import NewsSummary from '../components/newsSummary';
import PopupMenus from '../components/popupMenus';
import Layout from '../containers/layoutCotainer';

export default function MainPage() {
  return (
    <Layout>
      <div className="w-full h-[580px] bg-[url('./assets/img/mainImage.png')] bg-cover"></div>
      <div className='w-full min-w-[1300px] h-[200px] grid grid-cols-2 place-items-center my-10'>
        <PopupMenus />
        <NewsSummary />
      </div>
    </Layout>
  );
}
