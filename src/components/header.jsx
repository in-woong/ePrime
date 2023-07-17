import { Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import Example from './dropDown';
import MenuDropdown from './dropDown';

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href='/account-settings'
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href='/account-settings'
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className='opacity-75'>Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default function Header() {
  return (
    <div className='header flex justify-between min-w-[1200px] px-40 py-5'>
      <div>Eprime</div>
      <div className='flex w-[80%] justify-around'>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:bg-gray-50'
          >
            <LinkIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            회사소개
          </button>
        </span>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:bg-gray-50'
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
            className='inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:bg-gray-50'
          >
            <CheckIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            ESG
          </button>
        </span>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 border-b-2  hover:bg-gray-50'
          >
            <PencilIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            소통마당
          </button>
        </span>
      </div>

      <div className='flex'>
        <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
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
      <div className='relative top-5 -left-5 w-56 text-right'>
        <MenuDropdown />
      </div>
    </div>
  );
}
