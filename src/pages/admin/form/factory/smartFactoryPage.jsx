import React from 'react';
import Layout from '../../../../containers/adminLayoutContainer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AdminSmartFactoryPage() {
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
  totalRevenue = { 2020: 0, 2021: 0, 2022: 0, 2023: 0 },
  name,
  price,
  resourceAmount,
  resourcesStatus,
  sector,
  statusReason,
  totalResourceAmount,
  transactionOpinion,
  transitAmount,
  employeesCount,
  isRegistration,
}) {
  const navigate = useNavigate();

  return (
    <form className='w-[50%] my-5'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            스마트공장 지원신청
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
                    disabled
                    value={company}
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
                    disabled
                    value={address}
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
                    disabled
                    value={name}
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
                    disabled
                    value={sector}
                    id='sector'
                    autoComplete='sector'
                    className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-full'>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  총매출액
                </label>
                <div className='mt-2 grid grid-cols-4'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2'>
                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                      2020
                    </span>
                    <input
                      type='text'
                      value={totalRevenue[2020]}
                      disabled
                      id='totalRevenue_2020'
                      autoComplete='totalRevenue'
                      className='block focus:outline-none  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                      2021
                    </span>
                    <input
                      type='text'
                      value={totalRevenue[2021]}
                      disabled
                      id='totalRevenue_2021'
                      autoComplete='totalRevenue'
                      className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2  '>
                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                      2022
                    </span>
                    <input
                      type='text'
                      value={totalRevenue[2022]}
                      disabled
                      id='totalRevenue_2022'
                      autoComplete='totalRevenue'
                      className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 '>
                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-xs'>
                      2023
                    </span>
                    <input
                      type='text'
                      value={totalRevenue[2023]}
                      disabled
                      id='totalRevenue_2023'
                      autoComplete='totalRevenue'
                      className='block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
              <fieldset className='sm:col-span-4'>
                <legend className='text-sm font-semibold leading-6 text-gray-900'>
                  공장 등록증(유/무)
                </legend>
                <div className='mt-4 flex flex-cols items-center space-x-6'>
                  <div className='flex items-center gap-x-3'>
                    <input
                      id='isRegistration-true'
                      value='true'
                      checked={isRegistration == 'true' ? true : false}
                      disabled
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                    />
                    <label
                      htmlFor='push-everything'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      유
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <input
                      id='isRegistration-false'
                      value='false'
                      checked={isRegistration == 'false' ? true : false}
                      disabled
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600'
                    />
                    <label
                      htmlFor='push-email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      무
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className='sm:col-span-2 sm:col-start-1'>
                <label
                  htmlFor='employeesCount'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  종업원 수
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    value={employeesCount}
                    disabled
                    id='employeesCount'
                    autoComplete='employeesCount'
                    className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
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
                핸드폰
              </label>
              <div className='mt-2'>
                <input
                  disabled
                  value={contact.휴대폰}
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
                  disabled
                  value={contact.전화}
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
                  disabled
                  value={contact.fax}
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
            <fieldset className='sm:col-span-4'>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                원하는 폐자원품질(상태)
              </legend>
              <div className='mt-2 flex justify-between'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='field-5'
                    disabled
                    checked={resourcesStatus == '5' ? true : false}
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
                    disabled
                    checked={resourcesStatus == '4' ? true : false}
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
                    disabled
                    checked={resourcesStatus == '3' ? true : false}
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
                    disabled
                    checked={resourcesStatus == '2' ? true : false}
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
                    disabled
                    checked={resourcesStatus == '1' ? true : false}
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
                  disabled
                  value={resourceAmount}
                  id='resourceAmount'
                  autoComplete='resourceAmount'
                  placeholder='주 000톤(ton)'
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3 '>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                운송
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  value={transitAmount}
                  disabled
                  id='transitAmount'
                  autoComplete='transitAmount'
                  placeholder='주 00회(25톤기준)'
                  className='block w-full px-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                거래가능 가격
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  disabled
                  value={price}
                  id='price'
                  autoComplete='price'
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
                  value={totalResourceAmount}
                  id='totalResourceAmount'
                  autoComplete='totalResourceAmount'
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
                  id='transactionOpinion'
                  disabled
                  value={transactionOpinion}
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
    </form>
  );
}
