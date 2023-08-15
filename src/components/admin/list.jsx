export default function List({ title, key }) {
  return (
    <li className='flex w-[60%] justify-between' key={key}>
      <span>{title}</span>
      <button>바로가기</button>
    </li>
  );
}
