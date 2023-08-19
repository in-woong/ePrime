import { Link } from 'react-router-dom';

export default function NewsList({ title, id, content, date, url = '/' }) {
  return (
    <li className='flex w-full justify-between items-center' key={id}>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className='text-black hover:no-underline'
        to={url}
      >
        {title}
      </Link>
      <span className='text-sm flex items-end'>{date}</span>
    </li>
  );
}
