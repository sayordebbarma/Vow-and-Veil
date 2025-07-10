'use client'

import { Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#3c2c21] text-white px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-serif tracking-wider">Vow & Veil</h2>
                    <p className="text-sm mt-2 text-gray-300">
                        Curating timeless couple styles, accessories, and wedding memories.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase">Explore</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/shop" className="hover:underline">Shop</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/faq" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-200">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-pink-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase">Stay in touch</h3>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 text-sm rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
                        />
                        <button className="bg-[#e6d3c7] text-black px-3 py-2 rounded text-sm hover:bg-[#d9c4b7] transition">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Text */}
            <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Vow & Veil. All rights reserved.
            </div>
        </footer>
    )
}