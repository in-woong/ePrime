import Item from './Item';

export default function NoticeBoard({ title, data }) {
  console.log(title, data, 'BOARD');

  return (
    <div className='w-[60%] my-5 border-2 rounded-lg border-gray-400 border-opacity-90'>
      <div className='w-full py-4 flex justify-center items-center px-4 border-b-2 border-gray-400'>
        <h2 className='text-xl m-0 font-semibold leading-7 text-gray-800'>
          {title}
        </h2>
      </div>
      <ul className='grid grid-cols-1 m-0'>
        {data && data.map((item) => <Item title={title} data={item} />)}
      </ul>
    </div>
  );
}
