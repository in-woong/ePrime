import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../../../containers/adminLayoutContainer';

export default function AdminPickPage() {
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
  resourcesStatus,
  wasteResourceTypeOne,
  wasteResourceTypeTwo,
  wasteResourceTypeThree,
  amountAndPriceOne,
  amountAndPriceTwo,
  amountAndPriceThree,
  statusReason,
  transactionOpinion,
}) {
  const navigate = useNavigate();

  return (
    <form className='w-[50%] my-5'>
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
                  value={wasteResourceTypeOne.name}
                  disabled
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
                  value={wasteResourceTypeOne.photo}
                  disabled
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
                  value={wasteResourceTypeTwo.name}
                  disabled
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
                  value={wasteResourceTypeTwo.photo}
                  disabled
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
                  value={wasteResourceTypeThree.name}
                  disabled
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
                  value={wasteResourceTypeThree.photo}
                  disabled
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
                    disabled
                    checked={resourcesStatus == '4' ? true : false}
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
                    disabled
                    checked={resourcesStatus == '3' ? true : false}
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
                품질상태(평가이유)
              </label>
              <div className='mt-2'>
                <textarea
                  id='statusReason'
                  value={statusReason}
                  disabled
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
                    value={amountAndPriceOne.price}
                    disabled
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
                    value={amountAndPriceOne.amount}
                    disabled
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
                    value={amountAndPriceTwo.price}
                    disabled
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
                    value={amountAndPriceTwo.amount}
                    disabled
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
                    value={amountAndPriceThree.price}
                    disabled
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
                    value={amountAndPriceThree.amount}
                    disabled
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
                  value={transactionOpinion}
                  disabled
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
      </div>
    </form>
  );
}
