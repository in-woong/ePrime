import { useLocation } from 'react-router-dom';
import NoticeBoard from '../components/admin/noticeBoard';
import Layout from '../containers/layoutCotainer';
import { useEffect, useState } from 'react';

export default function ListPage() {
  const contentNum = 10;
  const location = useLocation();
  const [totalData, setTotalData] = useState([]);
  const [data, setData] = useState([]);
  const [len, setLen] = useState(0);
  const [num, setNum] = useState();

  useEffect(() => {
    setNum(1);
    setTotalData([...location.state.data]);
    setData([...location.state.data.filter((_, idx) => idx < contentNum)]);
    setLen(Math.ceil(location.state.data.length / contentNum));
  }, []);

  useEffect(() => {
    setData([
      ...totalData.filter(
        (d, idx) => contentNum * (num - 1) <= idx && idx < contentNum * num
      ),
    ]);
  }, [num, totalData]);

  const onNextClick = () => {
    if (num < len) {
      setNum(num + 1);
    }
  };

  const onPrevClick = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  return (
    <Layout>
      <div className='w-full relative h-[85vh] flex flex-col justify-start items-center'>
        <NoticeBoard title={location.state.title} data={data} />

        <nav aria-label='absolute b-10 Page navigation example'>
          <ul className='flex items-center -space-x-px h-10 text-base'>
            <li>
              <button
                onClick={onPrevClick}
                className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '
              >
                <span className='sr-only'>Previous</span>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 1 1 5l4 4'
                  />
                </svg>
              </button>
            </li>
            {repeat(len, num, setNum)}
            <li>
              <button
                onClick={onNextClick}
                className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
}

function repeat(len, num, setNum) {
  const arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(
      <li>
        <button
          key={i}
          onClick={() => setNum(i)}
          className={`${
            i === num ? 'text-gray-700 bg-gray-200' : 'text-gray-500 bg-white'
          } cursor-pointer flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}
        >
          {i}
        </button>
      </li>
    );
  }
  return arr;
}
