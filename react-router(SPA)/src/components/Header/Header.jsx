import React from 'react'
import {Link,NavLink} from 'react-router-dom';
function Header() {
    return (
        <header>
            <nav className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to='/' className="flex-shrink-0 text-indigo-500 font-bold text-xl">Biplav</Link>

                        {/* <!-- Desktop Menu --> */}
                        <ul className="hidden md:flex ">
                            <li>
                            <NavLink to={'/'} className={({isActive})=>`hover:text-indigo-400 px-6 ${isActive?'underline':''}`}>Home</NavLink>
                            <NavLink to={'/products'}  className={({isActive})=>`hover:text-indigo-400 px-6 ${isActive?'underline':''}`}>Products</NavLink>
                            <NavLink to={'/github'} className={({isActive})=>`hover:text-indigo-400 px-6 ${isActive?'underline':''}`}>GitHub</NavLink>
                            </li>
                        </ul>

                        {/* <!-- CTA (desktop) --> */}
                        <div className="hidden md:flex space-x-4 ">
                            <Link to="#" className="hover:text-indigo-400 text-sm px-4 py-2 ">Login</Link>
                            <Link to="#" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Get Started</Link>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <button className="md:hidden focus:outline-none" id="menu-button">
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu (dropdown) --> */}
                <div className="md:hidden hidden px-4 pb-4 space-y-2 bg-gray-800" id="mobile-menu">
                    <NavLink className="block text-white hover:text-indigo-400">Home</NavLink>
                    <div className="pt-2 border-t border-gray-700 mt-2">
                        <Link to="#" className="block text-sm text-white hover:text-indigo-400">Login</Link>
                        <Link to="#" className="block bg-indigo-500 hover:bg-indigo-600 text-white text-center py-2 mt-2 rounded-md text-sm font-medium">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header