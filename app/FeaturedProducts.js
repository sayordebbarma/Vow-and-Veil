'use client'

import Image from 'next/image'
import Link from 'next/link'
import { products } from '../lib/productsData';

export default function FeaturedProducts() {
  // Get the latest 3 products by createdAt
  const featuredProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <section className="w-full h-screen px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        {/* Left Text Panel */}
        <div className="lg:col-span-1 flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif italic text-gray-900 mb-4">This just in...</h3>
            {/* <p className="text-sm text-gray-600 mb-6">New arrivals →</p> */}
            <p className="text-sm text-gray-500">
              Our team of designers curates timeless pieces blending elegance & modernity — perfect for weddings that make a statement.
            </p>
          </div>
          <Link
            href="/collections"
            className="inline-block border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition w-max"
          >
            See Full Collection →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={product.href} className="group block">
              <div className="w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-[520px] object-cover"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase text-gray-500 tracking-wider">{product.category}</p>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-base mt-1">₹ {product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}