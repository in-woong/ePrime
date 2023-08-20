import React from 'react';
import Layout from '../../../../containers/adminLayoutContainer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AdminEsgPage() {
  const location = useLocation();

  return (
    <Layout>
      <Example {...location.state} />
    </Layout>
  );
}

function Example({
  address,
  company,
  contact = { 성명: '', 휴대폰: '', 전화: '', fax: '' },
  name,
  price,
  resourceAmount,
  resourcesStatus,
  sector,
  statusReason,
  transactionOpinion,
  wasteResourceType,
}) {
  const navigate = useNavigate();

  return (
    <div className='w-[50%] my-5 min-h-full'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            ESG 경영기업의 폐자원 거래 신청서
          </h2>
          {/* <p classNa서e='mt-1 text-sm leading-6 text-gray-600'>상세설명</p> */}
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
                    disabled
                    type='text'
                    id='company'
                    autoComplete='company'
                    value={company}
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
                    id='address'
                    value={address}
                    disabled
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
                    id='name'
                    disabled
                    value={name}
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
                    id='sector'
                    disabled
                    value={sector}
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
                  disabled
                  value={contact.성명}
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
                휴대폰
              </label>
              <div className='mt-2'>
                <input
                  id='contact_number'
                  disabled
                  type='text'
                  value={contact.휴대폰}
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
                  disabled
                  value={contact.전화}
                  id='contact_phone'
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
                  disabled
                  value={contact.fax}
                  type='text'
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
            <div className='sm:col-span-4 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                찾는 폐자원 품목
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  id='wasteResourceType'
                  value={wasteResourceType}
                  disabled
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <fieldset
              className='sm:col-span-4'
              disabled
              defaultValue={resourcesStatus}
            >
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                원하는 폐자원품질(상태)
              </legend>
              <div className='mt-2 flex justify-between'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-5'
                    value='5'
                    checked={resourcesStatus === '5' ? true : false}
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
                    value='4'
                    checked={resourcesStatus === '4' ? true : false}
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
                    value='3'
                    checked={resourcesStatus === '3' ? true : false}
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
                    value='2'
                    checked={resourcesStatus === '2' ? true : false}
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
                    value='1'
                    checked={resourcesStatus === '1' ? true : false}
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
                품질평가기준(의견)
              </label>
              <div className='mt-2'>
                <textarea
                  id='statusReason'
                  disabled
                  value={statusReason}
                  rows={3}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래가능량
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  disabled
                  value={resourceAmount}
                  id='resourceAmount'
                  placeholder='주 000톤(ton)'
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래희망가격
              </label>
              <div className='mt-2'>
                <input
                  type='price'
                  disabled
                  value={price}
                  id='price'
                  autoComplete='postal-code'
                  placeholder='000원 / Kg'
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래하고자 하는 양
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  disabled
                  value={resourceAmount}
                  id='amount'
                  placeholder='000 톤 / 회 (일, 월)'
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
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
                  disabled
                  value={transactionOpinion}
                  id='transactionOpinion'
                  rows={3}
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
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
      </div>
    </div>
  );
}
