'use client'

import Link from 'next/link'

const catalogDb = [
  {
    label: 'Couple Sets',
    href: '/collections/couple',
    image: '/catalog/couple.jpg',
  },
  {
    label: 'Bride Dresses',
    href: '/collections/bride',
    image: '/catalog/bride.jpg',
  },
  {
    label: 'Groom Suits',
    href: '/collections/groom',
    image: '/catalog/groom.jpg',
  },
  {
    label: 'Accessories',
    href: '/collections/accessories',
    image: '/catalog/accessories.jpg',
  },
]

export default function QuickLinks() {
  return (
    <section className="w-full h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full">
        {catalogDb.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative w-full h-full group overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center filter grayscale group-hover:filter-none transition-all duration-700 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="absolute bottom-24 w-full text-center z-10">
              <p className="text-white text-lg sm:text-xl font-light tracking-widest uppercase">
                {item.label}
              </p>
            </div>

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
          </Link>
        ))}
      </div>
    </section>
  )
}