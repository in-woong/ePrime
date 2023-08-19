import {
  BriefcaseIcon,
  CheckIcon,
  LinkIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button>More</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href='/account-settings'
//             >
//               Account settings
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href='/account-settings'
//             >
//               Documentation
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item disabled>
//           <span className='opacity-75'>Invite a friend (coming soon!)</span>
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//   );
// }

export default function Header() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const item = localStorage.getItem('key');

    if (item) {
      setToken(item);
    }
  }, [token]);

  const onBtnClick = () => {
    localStorage.removeItem('key');
    navigate('/');
  };
  return (
    <div className='header min-w-[1250px] flex items-center justify-between  w-full h-[90px] px-40 py-5 absolute top-0'>
      <Link to='/'>
        <Logo className='text-[15px]' />
        <h1 className='text-xl sr-only'>Eprime</h1>
      </Link>

      <div className='flex w-[80%] justify-around invisible lg:visible'>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-8 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:border-sky-800 hover:text-gray-500'
          >
            <LinkIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            회사소개
          </button>
        </span>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center  px-8 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:border-sky-800 hover:text-gray-500'
          >
            <BriefcaseIcon
              className='-ml-0.5 mr-1.5 h-5 w-5'
              aria-hidden='true'
            />
            폐자원거래
          </button>
        </span>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-8 py-2 text-sm font-semibold text-gray-900 border-b-2 hover:border-sky-800 hover:text-gray-500'
          >
            <CheckIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            ESG
          </button>
        </span>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-8 py-2 text-sm font-semibold text-gray-900 border-b-2 hover:border-sky-800 hover:text-gray-500'
          >
            <PencilIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            소통마당
          </button>
        </span>
      </div>
      {!token ? (
        <div className='flex'>
          <span className='sm:ml-3'>
            <button
              type='button'
              className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-500'
            >
              KOR
            </button>
          </span>

          <span className='sm:ml-3 '>
            <button
              type='button'
              className='inline-flex items-center rounded-md bg-white w-10 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            >
              <MagnifyingGlassIcon className=' h-5 w-5' aria-hidden='true' />
            </button>
          </span>
        </div>
      ) : (
        <div className='flex'>
          <span className='sm:ml-6'>
            <button
              onClick={onBtnClick}
              type='button'
              className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-500'
            >
              LogOut
            </button>
          </span>
        </div>
      )}

      {/* <div className='relative top-[1.5px] -left-10 w-56 text-right'>
        <MenuDropdown />
      </div> */}
    </div>
  );
}
