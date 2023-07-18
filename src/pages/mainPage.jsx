import NewsSummary from '../components/newsSummary';
import PopupMenus from '../components/popupMenus';
import Layout from '../containers/layoutCotainer';

export default function MainPage() {
  return (
    <Layout>
      <div className='w-full h-[580px]'>contents</div>
      <div className='w-full h-[200px] grid grid-cols-2 place-items-center my-10'>
        <PopupMenus />
        <NewsSummary />
      </div>
    </Layout>
  );
}
