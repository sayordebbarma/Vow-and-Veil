'use client'

import Image from 'next/image'

export default function AboutPage() {
    return (
        <section className="bg-[#fffaf7] text-black min-h-screen px-6 md:px-16 py-16">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                    About Vow & Veil
                </h1>
                <p className="text-lg text-gray-700">
                    Celebrating love through timeless elegance and curated details. At Vow & Veil, every piece tells a story.
                </p>
            </div>

            {/* Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <Image
                    src="/about/team1.jpg"
                    alt="Our Story"
                    width={600}
                    height={400}
                    className="w-full rounded-xl shadow"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-4 font-serif">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Vow & Veil began with a vision: to bring beautifully crafted wedding attire and accessories to couples everywhere.
                        Every collection is designed with intentional elegance, quality craftsmanship, and heartfelt storytelling. Whether it's a bride's first gown fitting or a couple choosing their perfect rings — we're honored to be part of that memory.
                    </p>
                </div>
            </div>

            {/* Values or Features */}
            <div className="mb-24">
                <h2 className="text-2xl font-semibold text-center font-serif mb-10">What We Stand For</h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">Timeless Craft</h3>
                        <p className="text-gray-700 text-sm">From fabrics to finishing, every detail is thoughtfully chosen.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">Inclusive Elegance</h3>
                        <p className="text-gray-700 text-sm">We create collections that celebrate all love stories.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">Memorable Experience</h3>
                        <p className="text-gray-700 text-sm">From online browsing to delivery, we aim to make it special.</p>
                    </div>
                </div>
            </div>

            {/* Team or Founder */}
            {/* <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold font-serif mb-6">Meet the Founders</h2>
                <p className="text-gray-700 leading-relaxed">
                    Founded by passionate designers and storytellers, Vow & Veil is led by a team that believes in the power of meaningful design and the beauty of simplicity. We're here to make your special moments feel just as beautiful as they are meaningful.
                </p>
            </div> */}
        </section>
    )
}