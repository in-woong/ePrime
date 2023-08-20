import React, { useEffect } from 'react';
import Logo from '../assets/img/logo.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  return <Example />;
}

function Example() {
  const navigate = useNavigate();

  const { register, handleSubmit, setError } = useForm();

  const onSubmit = (data) => {
    axios
      .post('/cms/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        localStorage.setItem('key', res.data.token);

        if (res.data.token) {
          navigate('/admin');
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('key');
    if (token) {
      navigate('/admin');
    }
  }, [navigate]);
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center my-auto px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-16 w-auto' src={Logo} alt='Your Company' />
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  {...register('email')}
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  {...register('password')}
                  type='password'
                  autoComplete='password'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Log In
            </button>
            {/* <ErrorMessage errors={errors} name='singleErrorInput' /> */}
          </form>
        </div>
      </div>
    </>
  );
}
