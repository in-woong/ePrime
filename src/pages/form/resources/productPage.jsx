import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../../../containers/layoutCotainer';
import { useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select';

export default function ProductPage() {
  return (
    <Layout>
      <Example />
    </Layout>
  );
}

function Example() {
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm({
    defaultValues: { recordType: 'makeMaterials' },
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
            폐자원 거래 신청서 (선별 - 재활용원료제조)
          </h2>
          {/* <p className='mt-1 text-sm leading-6 text-gray-600'>상세설명</p> */}
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
            <fieldset className='sm:col-span-4'>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                업종
              </legend>
              <div className='mt-4 flex flex-cols items-center space-x-6'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='sector-true'
                    value='true'
                    {...register('sector')}
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='sector-true'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    회수선별
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='sector-false'
                    value='false'
                    {...register('sector')}
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='sector-false'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    펠렛, 플레이크 등 재활용원료 제조
                  </label>
                </div>
              </div>
            </fieldset>
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
            거래 조건 및 내용
          </h2>
          {/* <p className='mt-1 text-sm leading-6 text-gray-600'>상세 설명</p> */}

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                폐자원종류
              </label>
              <Controller
                {...register('wasteResourceType')}
                name='ReactSelect'
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    {...field}
                    options={[
                      { value: '폐비닐-미분쇄', label: '폐비닐-미분쇄' },
                      { value: '폐비닐-분쇄품', label: '폐비닐-분쇄품' },
                      {
                        value: 'PE(선별품)-미분쇄',
                        label: 'PE(선별품)-미분쇄',
                      },
                      { value: 'PE(선별품)-분쇄', label: 'PE(선별품)-분쇄' },
                      {
                        value: 'PP(선별품)-미분쇄',
                        label: 'PP(선별품)-미분쇄',
                      },
                      { value: 'PP(선별품)-분쇄', label: 'PP(선별품)-분쇄' },
                      {
                        value: 'Pet(선별품)-미분쇄',
                        label: 'Pet(선별품)-미분쇄',
                      },
                      { value: 'ABS(선별품)-분쇄', label: 'ABS(선별품)-분쇄' },
                      { value: 'PS-ps', label: 'PS-ps' },
                      { value: '폐유리-선별품', label: '폐유리-선별품' },
                      { value: '금속캔-선별품', label: '금속캔-선별품' },
                      { value: '종이팩-선별품', label: '종이팩-선별품' },
                      { value: '폐지-선별품', label: '폐지-선별품' },
                      { value: 'ABS-선별품', label: 'ABS-선별품' },
                      { value: '기타', label: '기타' },
                    ]}
                  />
                )}
              />
            </div>
            <fieldset className='sm:col-span-4'>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                거래 형태
              </legend>
              <div className='mt-4 flex flex-cols items-center space-x-6'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-buy'
                    value='buy'
                    {...register('transactionType')}
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-everything'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    구매(수요)
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-sell'
                    value='sell'
                    {...register('transactionType')}
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    판매(공급)
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className='sm:col-span-4'>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                폐자원 품질상태
              </legend>
              <div className='mt-2 flex justify-between'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-5'
                    {...register('resourcesStatus')}
                    value='5'
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
                    id='field-4'
                    {...register('resourcesStatus')}
                    value='4'
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
                    id='field-3'
                    {...register('resourcesStatus')}
                    value='3'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    중급
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
                품질평가이유?
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
            <div className='sm:col-span-3 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래가능량
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('transitAmount')}
                  id='transitAmount'
                  autoComplete='address-level2'
                  placeholder='주 000톤(ton)'
                  className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='transitAmount'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                운송
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='transitAmount'
                  {...register('transitAmount')}
                  id='transitAmount'
                  autoComplete='address-level1'
                  placeholder='주 00회 (25톤 기준)'
                  className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                받고 싶은 가격
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('price')}
                  id='price'
                  placeholder='000원 / Kg'
                  className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                총 거래 가능량
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('totalResourceAmount')}
                  id='totalResourceAmount'
                  placeholder='000 톤 / 년 (일, 월)'
                  className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래가능 지속시간
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('duration')}
                  id='duration'
                  autoComplete='postal-code'
                  placeholder='00 일 (월, 년)'
                  className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
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
                  rows={3}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
              {/* <p className='mt-3 text-sm leading-6 text-gray-600'>
                세부내용을 상세히 작성 바랍니다
              </p> */}
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                현재 주거래 기업 수
              </label>
              <input
                type='text'
                {...register('tradingCompanyCount')}
                id='tradingCompanyCount'
                className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
              />
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
