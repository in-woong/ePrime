import { Link } from 'react-router-dom';
import NewsList from './admin/newsList';

export default function NewsSummary({ news }) {
  const contentNum = 5;

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='mb-2 w-[520px] relative flex justify-center items-center'>
        <span className='text-xl font-semibold'>주요기사 및 법령정보</span>
        <Link
          to='/list/news'
          className='absolute hover:no-underline transition-colors duration-200 right-0 text-sm text-slate-500  hover:text-cyan-600 hover:text-[15px] ease-in-out cursor-pointer'
          state={{ data: news, title: '주요기사 및 법령정보' }}
        >
          + 더보기
        </Link>
      </div>

      <ul className='grid grid-rows-4 h-full w-[520px] my-0 px-auto gap-2'>
        {news.map((news, id) => {
          if (id < contentNum) {
            return NewsList(news);
          }
        })}
      </ul>
    </div>
  );
}
