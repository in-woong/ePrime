import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../../containers/layoutCotainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EtcPage() {
  return (
    <Layout>
      <Example />
    </Layout>
  );
}

function Example() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { recordType: 'etc' },
  });

  const onSubmit = (data) => {
    axios
      .post(
        'http://e-prime-network.ap-northeast-2.elasticbeanstalk.com/record',
        data,
        {
          headars: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          alert('제출 완료되었습니다.');
          navigate('/');
        } else {
          alert('다시 시도해주세요');
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <form className='w-[50%] my-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            기타 도움이 필요하신 사항
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                업체 명
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    NAME
                  </span>
                  <input
                    {...register('company')}
                    type='text'
                    id='company'
                    autoComplete='company'
                    className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                주소
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    주소
                  </span>
                  <input
                    type='text'
                    {...register('address')}
                    id='address'
                    autoComplete='address'
                    className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                대표자
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    이름
                  </span>
                  <input
                    type='text'
                    {...register('name')}
                    id='name'
                    autoComplete='name'
                    className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                업종
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    업종
                  </span>
                  <input
                    type='text'
                    {...register('sector')}
                    id='sector'
                    autoComplete='sector'
                    className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            연락처
          </h2>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                성명
              </label>

              <div className='mt-2'>
                <input
                  type='text'
                  {...register('contact.성명')}
                  id='contact-name'
                  className='block w-full rounded-md border-0  p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                핸드폰
              </label>
              <div className='mt-2'>
                <input
                  {...register('contact.휴대폰')}
                  id='contact_number'
                  type='text'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='contact_phone'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                전화
              </label>
              <div className='mt-2'>
                <input
                  id='contact_phone'
                  {...register('contact.전화')}
                  type='contact_phone'
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Fax
              </label>
              <div className='mt-2'>
                <input
                  id='contact_fax'
                  type='text'
                  {...register('contact.fax')}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            도움이 필요한 내용
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                의견
              </label>
              <div className='mt-2'>
                <textarea
                  id='transactionOpinion'
                  {...register('transactionOpinion')}
                  rows={3}
                  placeholder='재활용 사업 및 ESG와 관련하여 어떤 것이든 도움이 필요한 사항이 있으시면 6하원칙에 의해 제시해 주시면 당사의 능력 범위 내에 성심성의껏 검토하여 답하겠습니다. (필요시 전화드리겠습니다)'
                  className='block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          onClick={() => navigate(-1)}
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          이전
        </button>
        <button
          type='submit'
          className='rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
        >
          제출하기
        </button>
      </div>
    </form>
  );
}
