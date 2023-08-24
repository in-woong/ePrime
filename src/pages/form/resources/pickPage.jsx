import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../../../containers/layoutCotainer';
import { useNavigate } from 'react-router-dom';

export default function PickPage() {
  return (
    <Layout>
      <Example />
    </Layout>
  );
}

function Example() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { recordType: 'wholeSale' },
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
            폐자원 거래 신청서 (재활용제품 - 도매상)
          </h2>
          {/* <p className='mt-1 text-sm leading-6 text-gray-600'>상세설명</p> */}
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                법인이름
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
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            개인정보 및 연락처
          </h2>
          {/* <p className='mt-1 text-sm leading-6 text-gray-600'>상세설명</p> */}

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
            재활용 제품 종류
          </h2>
          {/* <p className='mt-1 tex류-sm leading-6 text-gray-600'>상세 설명</p> */}
          <div className='sm:col-span-full'>
            <div className='mt-2 grid grid-cols-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                  규격1
                </span>
                <input
                  type='text'
                  {...register('wasteResourceTypeOne.name')}
                  id='wasteResourceTypeOne_name'
                  autoComplete='wasteResourceType_name'
                  className='block flex-1 px-2 focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                  사진
                </span>
                <input
                  type='file'
                  {...register('wasteResourceTypeOne.photo')}
                  id='wasteResourceTypeOne_photo'
                  autoComplete='wasteResourceType_photo'
                  className='block text-right px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='mt-2 grid grid-cols-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                  규격2
                </span>
                <input
                  type='text'
                  {...register('wasteResourceTypeTwo.name')}
                  id='wasteResourceTypeTwo_name'
                  autoComplete='wasteResourceType_name'
                  className='block flex-1 px-2 focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                  사진
                </span>
                <input
                  type='file'
                  {...register('wasteResourceTypeTwo.photo')}
                  id='wasteResourceTypeTwo_photo'
                  autoComplete='wasteResourceType_photo'
                  className='block px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='mt-2 grid grid-cols-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                  규격3
                </span>
                <input
                  type='text'
                  {...register('wasteResourceTypeThree.name')}
                  id='wasteResourceTypeThree_name'
                  autoComplete='wasteResourceType_name'
                  className='block flex-1 px-2 focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                  사진
                </span>
                <input
                  type='file'
                  {...register('wasteResourceTypeThree.photo')}
                  id='wasteResourceTypeThree_photo'
                  autoComplete='wasteResourceType_photo'
                  className='block text-right px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <fieldset className='sm:col-span-4'>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                품질평가
              </legend>
              <div className='mt-2 flex justify-between'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-4'
                    {...register('resourcesStatus')}
                    value='4'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-everything'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    최고급
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-3'
                    {...register('resourcesStatus')}
                    value='3'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    고급
                  </label>
                </div>

                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-2'
                    {...register('resourcesStatus')}
                    value='2'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    중저급
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-1'
                    {...register('resourcesStatus')}
                    value='1'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    저급
                  </label>
                </div>
              </div>
            </fieldset>

            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                품질상태(평가이유)
              </label>
              <div className='mt-2'>
                <textarea
                  id='statusReason'
                  {...register('statusReason')}
                  rows={3}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
              {/* <p className='mt-3 text-sm leading-6 text-gray-600'>
                세부내용을 상세히 작성 바랍니다
              </p> */}
            </div>
            <div className='sm:col-span-full'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                가격 및 거래량
              </label>
              <div className='mt-2 grid grid-cols-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    규격1
                  </span>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    가격
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceOne.price')}
                    id='amountAndPriceOne_price'
                    placeholder='0원 / 개'
                    autoComplete='amountAndPrice_price'
                    className='block flex-1 px-2 text-right focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    거래가능량
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceOne.amount')}
                    placeholder='0개/월(회)'
                    id='amountAndPriceOne_amount'
                    autoComplete='amountAndPrice_amount'
                    className='block text-right px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='mt-2 grid grid-cols-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    규격2
                  </span>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    가격
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceTwo.price')}
                    id='amountAndPriceTwo_price'
                    placeholder='0원 / 개'
                    autoComplete='amountAndPrice_price'
                    className='block flex-1 px-2 text-right focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    거래가능량
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceTwo.amount')}
                    placeholder='0개/월(회)'
                    id='amountAndPriceTwo_amount'
                    autoComplete='amountAndPrice_amount'
                    className='block text-right px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='mt-2 grid grid-cols-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    규격3
                  </span>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    가격
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceThree.price')}
                    id='amountAndPriceThree_price'
                    placeholder='0원 / 개'
                    autoComplete='amountAndPrice_price'
                    className='block flex-1 px-2 text-right focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                    거래가능량
                  </span>
                  <input
                    type='text'
                    {...register('amountAndPriceThree.amount')}
                    placeholder='0개/월(회)'
                    id='amountAndPriceThree_amount'
                    autoComplete='amountAndPrice_amount'
                    className='block text-right px-2 focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래시 하고 싶은 의견
              </label>
              <div className='mt-2'>
                <textarea
                  id='transactionOpinion'
                  {...register('transactionOpinion')}
                  autoComplete='transactionOpinion'
                  rows={3}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
              {/* <p className='mt-3 text-sm leading-6 text-gray-600'>
                세부내용을 상세히 작성 바랍니다
              </p> */}
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
