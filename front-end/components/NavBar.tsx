import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-between items-center bg-gray-950 p-4">
            <div className="flex-shrink-0">
                <Link href="/" className="text-white text-2xl font-bold">Logo
                </Link>
            </div>
            <div className="flex-grow text-right">
                <Link href="/" className="text-white mr-4">Home
                </Link>
                <Link href="/blog" className="text-white">Blog
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
