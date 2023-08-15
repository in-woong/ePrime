import { useEffect, useState } from 'react';
import Layout from '../../containers/layoutCotainer';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

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
          setNews(res.data.result);
          console.log('news', res);
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
          setEsgList(res.data.result);
          console.log('esgList', res);
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
          setSmartFactories(res.data.result);
          console.log('smartFactory', res);
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
          setEtcList(res.data.result);
          console.log('etcList', res);
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
          setProduceList(res.data.result);
          console.log('produceList', res);
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
          setProductList(res.data.result);
          console.log('productList', res);
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
          setPickList(res.data.result);
          console.log('pickList', res);
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
    <div className='grid grid-cols-2 gap-x-6 gap-y-8 w-full my-5'>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>주요기사 및 법령정보</span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {news && news.map((news) => List(news, news.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>선별 - 원료 </span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {pickList && pickList.map((data) => List(data, data.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>원료 - 제품생산</span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {produceList && produceList.map((data) => List(data, data.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>제품 - 도매상 </span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {proudctList && proudctList.map((data) => List(data, data.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>ESG 경영</span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {esgList && esgList.map((data) => List(data, data.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>스마트공장 지원 신청 </span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {smartFactories && smartFactories.map((data) => List(data, data.id))}
        </ul>
      </div>
      <div className='w-full h-40 flex flex-col items-center'>
        <div className='w-full flex justify-center text-2xl font-bold relative'>
          <span>기타 도움이 필요한 사항 </span>
          <button className='absolute right-20 text-sm text-slate-500'>
            + 더보기
          </button>
        </div>
        <ul className='m-0 w-full flex flex-col items-center justify-center'>
          {etcList && etcList.map((data) => List(data, data.id))}
        </ul>
      </div>
    </div>
  );
}
