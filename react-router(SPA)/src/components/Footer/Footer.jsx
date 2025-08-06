import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
                    {/* <!-- About --> */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100">Biplav</h3>
                        <p className="mt-4 text-sm text-gray-300">
                            Building responsive web solutions with passion.
                        </p>
                    </div>

                    {/* <!-- Links --> */}
                    <div>
                        <h4 className="text-md font-semibold mb-4 text-gray-100 ">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-500">About</a></li>
                            <li><a href="#" className="hover:text-indigo-500">Services</a></li>
                            <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Social --> */}
                    <div>
                        <h4 className="text-md font-semibold mb-4 text-gray-100">Connect</h4>
                        <div className="flex flex-col items-center sm:items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#" className="hover:text-indigo-500">Twitter</a>
                            <a href="#" className="hover:text-indigo-500">LinkedIn</a>
                            <a href="#" className="hover:text-indigo-500">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-center text-gray-350">
                    © 2025 Biplav. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer