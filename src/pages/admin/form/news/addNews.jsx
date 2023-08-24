import { useForm } from 'react-hook-form';
import Layout from '../../../../containers/adminLayoutContainer';
import Logo from '../../../../assets/img/logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddNews() {
  return (
    <Layout>
      <Example />
    </Layout>
  );
}

function Example() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const { register, handleSubmit, setError } = useForm();

  useEffect(() => {
    const storageToken = localStorage.getItem('key');

    setToken(storageToken);
    if (!storageToken) {
      navigate('/login');
    }
  }, [navigate]);

  const onSubmit = (data) => {
    const token = localStorage.getItem('key');

    axios
      .post(
        'http://e-prime-network.ap-northeast-2.elasticbeanstalk.com/cms/news',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          navigate('/admin');
        } else {
          navigate('/addNews');
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className='flex w-full h-[80vh] pb-[90px] flex-col justify-center items-center my-auto px-6 '>
      <div className='mt-10 w-[50%]'>
        <form
          className='space-y-6 grid gap-x-6 gap-y-1 grid-cols-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='col-span-3'>
            <label
              htmlFor='title'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Title
            </label>
            <div className='mt-2'>
              <input
                id='title'
                {...register('title')}
                type='title'
                autoComplete='title'
                required
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='col-span-4'>
            <label
              htmlFor='url'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Url
            </label>
            <div className='mt-2'>
              <input
                id='url'
                {...register('url')}
                type='url'
                autoComplete='url'
                required
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <label
              htmlFor='date'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Date
            </label>
            <div className='mt-2'>
              <input
                id='date'
                {...register('date')}
                type='date'
                autoComplete='date'
                required
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='col-span-6'>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='content'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Content
              </label>
            </div>
            <div className='mt-2'>
              <textarea
                id='content'
                {...register('content')}
                type='content'
                autoComplete='content'
                required
                className='block w-full h-[190px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='flex justify-end col-span-full'>
            <button
              type='submit'
              className='flex w-[20%] min-w-fit justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
            >
              추가하기
            </button>
          </div>
          {/* <ErrorMessage errors={errors} name='singleErrorInput' /> */}
        </form>
      </div>
    </div>
  );
}
