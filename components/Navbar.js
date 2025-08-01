'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShoppingBag, User } from 'lucide-react'
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { cart } = useCart();
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={
                scrolled
                    ? 'fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-md text-black'
                    : !isHome
                        ? 'fixed top-0 w-full z-50 transition-all duration-300 bg-transparent text-black'
                        : 'fixed top-0 w-full z-50 transition-all duration-300 bg-transparent text-white'
            }
        >
            <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-4'>
                {/* Brand Name */}
                <Link href='/'>
                    <span className="italic font-semibold">Vow</span>&nbsp;&amp;&nbsp;<span className="italic">Veil</span>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-8 text-sm uppercase font-light tracking-wider">
                    <Link href="/">Home</Link>
                    <Link href="/collections">Collections</Link>
                    <Link href="/lookbook">Lookbook</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Account & Cart */}
                <div className='flex items-center gap-5'>
                    <Link href="/account" className="hover:text-gray-600 transition">
                        <User size={20} />
                    </Link>
                    <Link href="/cart" className="relative hover:text-gray-600 transition">
                        <ShoppingBag size={20} />
                        {/* Cart count badge */}
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-[1px] rounded-full">
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}