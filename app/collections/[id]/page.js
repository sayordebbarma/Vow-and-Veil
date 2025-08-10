"use client";

import { useParams } from 'next/navigation';
import { products } from '../../../lib/productsData';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const product = products.find(p => p.id.toString() === productId);
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);
  const [mainImage, setMainImage] = useState(product?.image);

  // Size states
  const [brideSize, setBrideSize] = useState(null);
  const [groomSize, setGroomSize] = useState(null);
  const [singleSize, setSingleSize] = useState(null);

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  const toggleWishlist = id => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    if (product.category === "Couple Sets") {
      if (!brideSize || !groomSize) {
        alert("Please select sizes for both partners.");
        return;
      }
      addToCart({ ...product, sizes: { bride: brideSize, groom: groomSize } });
    } else {
      if (!singleSize) {
        alert("Please select a size.");
        return;
      }
      addToCart({ ...product, size: singleSize });
    }
  };

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 pt-24 pb-10 gap-12">
      {/* Left: Image Gallery */}
      <div className="lg:w-1/2 h-[80vh] overflow-y-auto hide-scrollbar">
        <div className="w-full h-160 mb-2">
          <Image
            src={mainImage}
            alt={product.name}
            width={600}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[product.image, ...(product.images || [])].map((img, idx) => (
            <div
              key={idx}
              onClick={() => setMainImage(img)}
              className="w-full h-100 cursor-pointer"
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx}`}
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="lg:w-1/2 space-y-2">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold text-[#1e1e1e]">{product.name}</h1>
          <button
            onClick={() => toggleWishlist(product.id)}
            className="p-2 border rounded-full cursor-pointer"
            aria-label="Add to Wishlist"
          >
            <Heart
              className={`w-6 h-6 ${wishlist.includes(product.id)
                ? 'text-red-500 fill-red-500'
                : 'text-gray-600'
                }`}
            />
          </button>
        </div>

        <p className="text-xl font-semibold text-gray-800">₹ {product.price}</p>
        <p className="mt-8 text-sm text-gray-600">Category: {product.category}</p>

        {/* Size selection logic */}
        {product.category === "Couple Sets" ? (
          <div className="space-y-4 my-4">
            <div>
              <p className="font-semibold mb-2">Bride Size:</p>
              <div className="flex gap-2 flex-wrap">
                {sizeOptions.map(size => (
                  <button
                    key={size}
                    onClick={() => setBrideSize(size)}
                    className={`px-3 py-1 border rounded cursor-pointer 
                      ${brideSize === size ? 'bg-black text-white' : 'hover:bg-[#f5f5f5]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Groom Size:</p>
              <div className="flex gap-2 flex-wrap">
                {sizeOptions.map(size => (
                  <button
                    key={size}
                    onClick={() => setGroomSize(size)}
                    className={`px-3 py-1 border rounded cursor-pointer 
                      ${groomSize === size ? 'bg-black text-white' : 'hover:bg-[#f5f5f5]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {sizeOptions.map(size => (
                <button
                  key={size}
                  onClick={() => setSingleSize(size)}
                  className={`px-3 py-1 border rounded cursor-pointer 
                  ${singleSize === size ? 'bg-black text-white' : 'hover:bg-[#f5f5f5]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white px-6 py-3 hover:opacity-90 transition cursor-pointer"
          >
            Add to Cart
          </button>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="font-bold text-black text-lg mb-2">Description</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Extra details */}
        <div className="mt-8 border-t pt-4 space-y-4">
          {['Fit & Features', 'Fabric', 'Materials & Care', 'Free Shipping & Exchanges'].map(
            (section, idx) => (
              <details key={idx} className="group">
                <summary className="flex justify-between cursor-pointer font-bold text-gray-800">
                  {section} <span className="group-open:rotate-180">⌄</span>
                </summary>
                <div className="text-sm text-gray-600 mt-2">
                  More details about {section.toLowerCase()} will appear here.
                </div>
              </details>
            )
          )}
        </div>
      </div>
    </div>
  );
}