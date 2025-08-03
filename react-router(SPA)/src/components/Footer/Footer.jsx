import React from 'react'

function Footer() {
    return (
        <footer class="bg-gray-700 text-gray-300">
            <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
                    {/* <!-- About --> */}
                    <div>
                        <h3 class="text-lg font-semibold text-gray-100">Biplav</h3>
                        <p class="mt-4 text-sm text-gray-300">
                            Building responsive web solutions with passion.
                        </p>
                    </div>

                    {/* <!-- Links --> */}
                    <div>
                        <h4 class="text-md font-semibold mb-4 text-gray-100 ">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-indigo-500">About</a></li>
                            <li><a href="#" class="hover:text-indigo-500">Services</a></li>
                            <li><a href="#" class="hover:text-indigo-500">Blog</a></li>
                            <li><a href="#" class="hover:text-indigo-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Social --> */}
                    <div>
                        <h4 class="text-md font-semibold mb-4 text-gray-100">Connect</h4>
                        <div class="flex flex-col items-center sm:items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#" class="hover:text-indigo-500">Twitter</a>
                            <a href="#" class="hover:text-indigo-500">LinkedIn</a>
                            <a href="#" class="hover:text-indigo-500">GitHub</a>
                        </div>
                    </div>
                </div>

                <div class="mt-12 border-t border-gray-200 pt-6 text-sm text-center text-gray-350">
                    © 2025 Biplav. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer