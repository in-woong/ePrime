import { useEffect, useState } from 'react';
import NewsSummary from '../components/newsSummary';
import PopupMenus from '../components/popupMenus';
import Layout from '../containers/layoutCotainer';
import axios from 'axios';

export default function MainPage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get('/news', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        if (res.data.result) {
          res.data.result.reverse();
          setNews(res.data.result);
        }
      });
  }, []);
  return (
    <Layout>
      <div className="w-full h-[580px] bg-[url('./assets/img/mainImage.png')] bg-cover"></div>
      <div className='w-full min-w-[1300px] h-[200px] grid grid-cols-2 place-items-center my-10'>
        <PopupMenus />
        <NewsSummary news={news} />
      </div>
    </Layout>
  );
}
