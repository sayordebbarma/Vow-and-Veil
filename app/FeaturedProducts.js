'use client'

import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  {
    title: 'Ivory Lace Couple Ensemble',
    category: 'Couple Sets',
    price: '₹12,999',
    image: '/products/couple1.jpg',
    href: '/collections/couple1',
  },
  {
    title: 'Minimalist Bride Gown',
    category: 'Bride Dresses',
    price: '₹8,499',
    image: '/products/couple2.jpg',
    href: '/collections/couple2',
  },
  {
    title: 'Classic Groom Tuxedo',
    category: 'Groom Suits',
    price: '₹9,999',
    image: '/products/couple3.jpg',
    href: '/collections/couple3',
  },
]

export default function FeaturedProducts() {
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
            <Link key={product.title} href={product.href} className="group block">
              <div className="w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="w-full h-[520px] object-cover"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase text-gray-500 tracking-wider">{product.category}</p>
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="text-base mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}