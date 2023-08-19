import { useEffect, useState } from 'react';
import Layout from '../../containers/adminLayoutContainer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import List from '../../components/admin/list';

export default function AdminPage() {
  return (
    <Layout>
      <Example />
    </Layout>
  );
}

function Example() {
  const contentsNum = 5;
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [esgList, setEsgList] = useState();
  const [etcList, setEtcList] = useState();
  const [smartFactories, setSmartFactories] = useState();
  const [pickList, setPickList] = useState();
  const [proudctList, setProductList] = useState();
  const [produceList, setProduceList] = useState();

  useEffect(() => {
    const token = localStorage.getItem('key');
    try {
      axios
        .get('/cms/news', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setNews(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=esg', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setEsgList(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=smartFactory', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setSmartFactories(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=etc', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setEtcList(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=makeMaterials', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setPickList(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=makeProduct', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setProduceList(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get('/cms/record?recordType=wholeSale', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.result) {
            res.data.result.reverse();
            setProductList(res.data.result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className='grid grid-cols-2 max-w-[1100px] gap-x-2 gap-y-8 w-full my-5 place-items-center place-content-center'>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>주요기사 및 법령정보</span>
          <div className='flex flex-col absolute right-0'>
            <Link to='/addNews' className='text-sm text-slate-500'>
              + 추가하기
            </Link>
            <Link
              to='/list/news'
              state={{ data: news, title: '주요기사 및 법령정보' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {news &&
            news.map((news, i) => {
              if (i < contentsNum) {
                return List(news);
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>선별 - 원료 </span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              className='text-sm text-slate-500'
              to='/list/pickList'
              state={{ data: pickList, title: '선별 - 원료' }}
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-start'>
          {pickList &&
            pickList.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_product/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>원료 - 제품생산</span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              to='/list/produce'
              state={{ data: produceList, title: '원료 - 제품생산' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {produceList &&
            produceList.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_produce/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>제품 - 도매상 </span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              to='/list/proudctList'
              state={{ data: proudctList, title: '제품 - 도매상' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {proudctList &&
            proudctList.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_pick/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>ESG 경영</span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              to='/list/esgList'
              state={{ data: esgList, title: 'ESG 경영' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {esgList &&
            esgList.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_esg/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>스마트공장 지원 신청</span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              to='/list/smartFactories'
              state={{ data: smartFactories, title: '스마트공장 지원 신청' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {smartFactories &&
            smartFactories.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_smartfactory/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
      <div className='w-[500px] h-[220px] border-2 border-gray-200 p-4 flex flex-col items-center'>
        <div className='w-full mb-5 flex justify-center text-2xl font-bold relative'>
          <span>기타 도움이 필요한 사항</span>
          <div className='flex flex-col h-full justify-center absolute right-0'>
            <Link
              to='/list/etcList'
              state={{ data: etcList, title: '기타 도움이 필요한 사항' }}
              className='text-sm text-slate-500'
            >
              + 더보기
            </Link>
          </div>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {etcList &&
            etcList.map((data, i) => {
              if (i < contentsNum) {
                return List({
                  title: data.company,
                  id: data.id,
                  url: `/admin/form_etc/${data.id}`,
                  data,
                });
              }
            })}
        </ul>
      </div>
    </div>
  );
}
