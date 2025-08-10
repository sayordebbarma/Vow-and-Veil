"use client";

import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeItem, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/collections"
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={112}
                height={112}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.category}
                  {item.isCouple && item.sizes ? (
                    <>
                      {" "}/ Bride: {item.sizes.bride}, Groom: {item.sizes.groom}
                    </>
                  ) : item.size ? (
                    <> / Size: {item.size}</>
                  ) : null}
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  ₹ {item.price}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline text-sm  cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-6">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4 mb-6">
          <span>Total</span>
          <span>₹ {subtotal}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg cursor-pointer hover:opacity-90 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}