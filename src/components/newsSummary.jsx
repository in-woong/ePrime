export default function NewsSummary() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-[650px]'>
      <div className='mb-2 w-[300px] relative flex justify-center items-center'>
        <span className='text-xl font-semibold'>주요기사 및 법령정보</span>
        <button className='absolute right-0 text-sm text-slate-500'>
          + 더보기
        </button>
      </div>

      <ul className='grid grid-rows-4 h-full w-[520px] my-0 px-auto gap-2'>
        <li className='flex justify-between items-center'>
          <span>
            [한국환경산업기술원] 재활용환경성평가 전문인력 양성과정 교육생
          </span>
          <span className='text-sm flex items-end'>2023.07.03</span>
        </li>
        <li className='flex justify-between items-center'>
          <span>재입법예고('23. 6. 30)-폐기물관리법 시행규칙 일부개정령안</span>
          <span className='text-sm flex items-end'>2023.07.03</span>
        </li>
        <li className='flex justify-between items-center'>
          <span>국회입법('23.6.21)-가축전염병 예방법 일부개정법률안</span>
          <span className='text-sm flex items-end'>2023.07.03</span>
        </li>
        <li className='flex justify-between items-center'>
          <span>국회입법('23.6.21)-사료관리법 일부개정법률안(이동주의)</span>
          <span className='text-sm flex items-end'>2023.07.03</span>
        </li>
      </ul>
    </div>
  );
}
