'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { products } from '../../lib/productsData';
import { useCart } from '../../context/CartContext';

const categorySet = new Set(products.map(p => p.category))
const filters = Array.from(categorySet)
const sortingOptions = ['Newest', 'Price: low to high', 'Price: high to low', 'Best Sellers']

export default function CollectionsPage() {
    const [selectedFilter, setSelectedFilter] = useState('All')
    const [sort, setSort] = useState('Newest')
    const [wishlist, setWishlist] = useState([])
    const router = useRouter()
    const { addToCart } = useCart();

    // Filtering
    let filtered = selectedFilter === 'All'
        ? products
        : products.filter(p => p.category === selectedFilter)

    // Sorting
    if (sort === 'Price: low to high') {
        filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sort === 'Price: high to low') {
        filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sort === 'Best Sellers') {
        filtered = [...filtered].reverse()
    }

    const toggleWishlist = (id) => {
        setWishlist(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const handleCardClick = (id) => {
        router.push(`/collections/${id}`)
    }

    return (
        <section className="px-6 md:px-16 py-12 bg-[#fffaf7] min-h-screen">
            {/* Filters and Sorting */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                {/* Filters */}
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedFilter('All')}
                        className={`text-sm px-3 py-1 rounded-full border ${selectedFilter === 'All' ? 'bg-black text-white' : 'text-black'}`}
                    >
                        All
                    </button>
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setSelectedFilter(f)}
                            className={`text-sm px-3 py-1 rounded-full border ${selectedFilter === f ? 'bg-black text-white' : 'text-black'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Sorting */}
                <div className="text-sm">
                    <label htmlFor="sort" className="mr-2">Sort by:</label>
                    <select
                        id="sort"
                        className="border px-2 py-1 rounded text-black"
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                    >
                        {sortingOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map(product => (
                    <div
                        key={product.id}
                        className="relative"
                    >
                        {/* Wishlist Button */}
                        <button
                            onClick={() => toggleWishlist(product.id)}
                            className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow"
                            aria-label="Add to Wishlist"
                        >
                            <Heart
                                className={`w-5 h-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
                            />
                        </button>

                        {/* Product Content */}
                        <div
                            onClick={() => handleCardClick(product.id)}
                            className="cursor-pointer pb-4 flex flex-col items-center gap-3"
                        >
                            <div className="w-full aspect-[9/12] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-sm text-black text-left">{product.name}</h3>
                                <p className="text-sm font-semibold text-gray-600 text-right">₹ {product.price}</p>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="pb-4">
                            <button className="w-full text-sm bg-[#3c2c21] text-white py-2 hover:opacity-90 transition" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}