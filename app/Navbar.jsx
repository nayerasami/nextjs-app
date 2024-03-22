import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-green-900 p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">First Demo</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300">
                           Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300">
                           About
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="text-white hover:text-gray-300">
                           Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" className="text-white hover:text-gray-300">
                           Users
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300">
                           Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
