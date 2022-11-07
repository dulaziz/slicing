import React, {useState, useCallback} from 'react'
import Link from 'next/link'

//import svg
import Logo from 'images/logoRB.svg'

export default function Header() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = useCallback(
        () => {
            setMenu(prev => !prev)
        },
        [setMenu],
    )

  return (
    <header className='max-w-full lg:max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
        <div className='w-40 lg:w-64'>
            <Logo className="logo-style-1" />
        </div>

        <button 
        onClick={toggleMenu} 
        className={
            [
                'w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50', menu ? "text-white fixed right-4" : "relative text-inherit"  
            ].join(" ")
        } 
        >
            <span className="material-icons">{menu ? "close" : "menu"}</span>
        </button>

        <div className={["lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20", menu? "flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black" : "hidden opacity-0 h-0 invisible",].join(" ")}>
            <ul className='flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0'>
            <li className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-900'>
                Destinations
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-900'>
                Hotels
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-900'>
                Flights
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-900'>
                Bookings
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-900'>
                Login
                </Link>
            </li>
            <li className=''>
                <Link href="/destinations" className='px-5 py-1 border border-white lg:border-gray-900 rounded-md mx-5 text-white lg:text-gray-900'>
                Sign up
                </Link>
            </li>
            <button className=''>
                <Link href="/destinations" className='px-9 text-white lg:text-gray-800 relative'>
                EN
                <span className='absolute w-2 h-2 border-white lg:border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2'></span>
                </Link>
            </button>
            </ul>
        </div>
        </div>
    </header>
  )
}
