import { Link } from 'react-router-dom';

export default function PopupMenus() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-[650px]'>
      <ul className='grid grid-rows-4 w-[520px] h-full my-0 px-auto gap-1'>
        <li className='flex justify-between items-center'>
          ESG 경영 전략 수립시 양질의 원료가 필요하신 분!{' '}
          <Link
            to='/form_esg'
            className='text-xl font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[22px] transition-all ease-in-out duration-200'
          >
            Click
          </Link>
        </li>
        <li className='flex justify-between items-center relative '>
          폐자원(Pellet, Flake 포함)을 사고 파는데 도움이 필요하신 분!
          <div className='group text-xl font-bold text-gray-500 hover:text-cyan-600 hover:text-[22px] transition-all ease-in-out duration-200 cursor-pointer'>
            Click
            <ul className='group absolute left-[calc(100%)] pl-5 w-full top-0 hidden font-bold text-sm text-red-500 group-hover:block'>
              <li>
                <Link
                  to='/form_product'
                  className=' font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[18px] transition-all ease-in-out duration-200'
                >
                  폐자원 거래 신청서(선별 - 재활용원료제조)
                </Link>
              </li>
              <li>
                <Link
                  to='/form_produce'
                  className=' font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[18px] transition-all ease-in-out duration-200'
                >
                  폐자원 거래 신청서(재활용 원료 - 재활용제품 생산단계)
                </Link>
              </li>
              <li>
                <Link
                  to='/form_pick'
                  className=' font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[18px] transition-all ease-in-out duration-200'
                >
                  폐자원 거래 신청서(재활용 제품 - 도매상)
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className='flex justify-between items-center'>
          24 스마트생태공장구축 지원사업 신청하시고자 하는분!
          <Link
            to='/form_factory'
            className='text-xl font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[22px] transition-all ease-in-out duration-200'
          >
            Click
          </Link>
        </li>
        <li className='flex justify-between items-center'>
          기타 재활용사업 수행과 관련하여 도움이 필요한 분!
          <Link
            to='/form_etc'
            className='text-xl font-bold text-gray-500 hover:no-underline hover:text-cyan-600 hover:text-[22px] transition-all ease-in-out duration-200'
          >
            Click
          </Link>
        </li>
      </ul>
    </div>
  );
}
