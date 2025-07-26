"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import { MoveLeft, MoveRight, MoveUpRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useCart } from '../../context/CartContext';

const looks = [
    {
        id: 1,
        image: '/lookbook/look1.jpg',
        gender: "Shop groom's look",
        products: [
            { id: 1, name: 'Young Man Tuxedo', price: 120, image: '/lookbook/tuxedo1.jpg' },
            { id: 2, name: 'White Rose FLower', price: 80, image: '/lookbook/flower1.png' },
            { id: 3, name: 'Gold Watch and Bracelet', price: 60, image: '/lookbook/accessories1.png' }
        ]
    },
    {
        id: 2,
        image: '/lookbook/look2.jpg',
        gender: "Shop bride's look",
        products: [
            { id: 4, name: 'Floral Maxi Dress', price: 150, image: '/lookbook/bride.jpg' },
            { id: 5, name: 'Pearl Drop Ring', price: 40, image: '/lookbook/brideRing2.jpg' },
            { id: 6, name: 'Lace Heels', price: 100, image: '/lookbook/heel2.png' }
        ]
    }
]

export default function LookbookPage() {
    const [index, setIndex] = useState(0)
    const current = looks[index]
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const addLookBtnRef = useRef(null);

    const handleAddLookToCart = () => {
        current.products.forEach(product => addToCart(product));
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    // Animate button on mount and on hover
    useGSAP(() => {
        if (addLookBtnRef.current) {
            gsap.fromTo(addLookBtnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
        }
    }, [index]);

    useGSAP(() => {
        gsap.fromTo(
            '.look-slide',
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        )
    }, [index])

    const nextSlide = () => setIndex((prev) => (prev + 1) % looks.length)
    const prevSlide = () => setIndex((prev) => (prev - 1 + looks.length) % looks.length)

    return (
        <section className="bg-[#fffaf7] min-h-screen px-6 md:px-16 py-14">
            <div className="look-slide flex flex-col md:flex-row gap-2 items-center">
                {/* Look Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-[300px] h-[400px] md:w-[600px] md:h-[700px]">
                        <Image
                            src={current.image}
                            alt="Look"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex flex-row items-center justify-between gap-4 w-full mb-2">
                            <h3 className="text-lg font-medium text-center m-0">{current.gender}</h3>
                            <button
                                ref={addLookBtnRef}
                                onClick={handleAddLookToCart}
                                className="group text-black px-0 py-2 flex items-center gap-1 transition-all duration-200 border-none bg-transparent outline-none hover:underline hover:decoration-1 hover:underline-offset-4 cursor-pointer"
                            >
                                Add Look to Cart
                                <MoveUpRight size={15} className="inline transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                        {added && <span className="text-green-600 text-sm mt-1">Look added to cart!</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 cursor-pointer">
                        {current.products.map((product) => (
                            <div key={product.id} className="text-center flex flex-col items-center">
                                <div className="relative w-[120px] h-[160px] md:w-[200px] md:h-[300px] mx-auto">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover "
                                    />
                                </div>
                                <p className="text-sm mt-2 font-medium">{product.name}</p>
                                <p className="text-xs text-gray-600">${product.price}</p>
                                {/* <button className="mt-2 text-xs text-black underline hover:text-gray-800">
                                    View Product →
                                </button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* navigation buttons */}
            <div className="flex items-center justify-between mt-8">
                <button
                    onClick={prevSlide}
                    className="text-black px-4 py-2 border-2 rounded-full hover:bg-gray-400 flex items-center gap-2 cursor-pointer"
                >
                    <MoveLeft size={20} /> Prev
                </button>
                <button
                    onClick={nextSlide}
                    className="text-black px-4 py-2 border-2 rounded-full hover:bg-gray-400 flex items-center gap-2 cursor-pointer"
                >
                    Next <MoveRight size={20} />
                </button>
            </div>
        </section>
    )
}