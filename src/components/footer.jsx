import React from 'react';

const Footer = () => {
  return (
    <footer className='footer w-full p-10 grid grid-cols-3 bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-900 footer-center '>
      <div className='flex justify-center items-center'>
        <span>이프라임 (E-Prime)</span>
      </div>
      <div className='flex justify-center items-center'>
        <span>
          (우) 30151 세종특별자치시 시청대로 209 금강르네상스 상사 405
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <span>Tel: 044-868-3451 i044-868-3458</span>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
