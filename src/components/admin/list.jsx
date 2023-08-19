import { Link } from 'react-router-dom';

export default function List({ title, id, url = '/', data }) {
  return (
    <li className='flex w-full justify-between' key={id}>
      <span>{title}</span>
      <Link to={url} state={data}>
        바로가기
      </Link>
    </li>
  );
}
