import react, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onNavToggle = () => setOpen((open) => !open);

  return (
    <div>
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="my-container flex flex-col md:items-center md:justify-between md:flex-row">
          <div className="py-4 flex flex-row items-center justify-between">
            <Link href="/">
              <a className="text-lg font-semibold tracking-wider text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                Coding for a Cause
              </a>
            </Link>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={onNavToggle}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {open ? (
                  <path
                    x-show="open"
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    x-show="!open"
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              open ? 'flex' : 'hidden'
            } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <NavLink href="/lessons" text="Lessons"></NavLink>
            <NavLink href="/contact" text="Contact Us"></NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
