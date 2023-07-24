import { Link } from 'react-router-dom';

export default function PopupMenus() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-[650px]'>
      <ul className='grid grid-rows-5 w-[520px] h-full my-0 px-auto gap-1'>
        <li className='flex justify-between items-center'>
          ESG 경영 전략 수립시 양질의 원료가 필요하신 분!{' '}
          <Link
            to='/form_esg'
            className='text-xl font-bold hover:text-gray-500'
          >
            Click
          </Link>
        </li>
        <li className='flex justify-between items-center'>
          폐자원(Pellet, Flake 포함)을 사고 파는데 도움이 필요하신 분!
          <Link
            to='form_product'
            className='text-xl font-bold hover:text-gray-500'
          >
            Click
          </Link>
        </li>
        <li className='flex justify-between items-center'>
          24 스마트생태공장구축 지원사업 신청하시고자 하는분!
          <button className='text-xl font-bold hover:text-gray-500'>
            Click
          </button>
        </li>
        <li className='flex justify-between items-center'>
          재활용 사업 소모품을 저렴하게 구입하시고자 하는 분!
          <button className='text-xl font-bold hover:text-gray-500'>
            Click
          </button>
        </li>
        <li className='flex justify-between items-center'>
          기타 재활용사업 수행과 관련하여 도움이 필요한 분!
          <button className='text-xl font-bold hover:text-gray-500'>
            Click
          </button>
        </li>
      </ul>
    </div>
  );
}
