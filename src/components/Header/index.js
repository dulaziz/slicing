import React from 'react'
import Link from 'next/link'

//import svg
import Logo from 'images/logoRB.svg'

export default function Header() {
  return (
    <header className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
        <div className='w-28'>
            <Logo className="logo-style-1" />
        </div>
        <div className='w-auto'>
            <ul className='flex items-center'>
            <li className=''>
                <Link href="/destinations" className='px-9 text-gray-900'>
                Destinations
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-gray-900'>
                Hotels
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-gray-900'>
                Flights
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-gray-900'>
                Bookings
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-gray-900'>
                Login
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-5 py-1 border border-gray-900 rounded-md mx-5 text-gray-900'>
                Sign up
                </Link>
            </li>
            <button className=''>
                <Link href="/destinations" className='px-9 text-gray-800 relative'>
                EN
                <span className='absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2'></span>
                </Link>
            </button>
            </ul>
        </div>
        </div>
    </header>
  )
}
