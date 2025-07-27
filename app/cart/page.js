'use client'

import { useState } from 'react'
import { useCart } from '../../context/CartContext';

export default function CartPage() {
    const { cart, updateQuantity, removeItem } = useCart();
    const [promoCode, setPromoCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [shipping, setShipping] = useState('standard')
    const [payment, setPayment] = useState('card')

    const applyPromo = () => {
        if (promoCode === 'LOVE10') {
            setDiscount(0.1) // 10% off
        } else {
            setDiscount(0)
        }
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discountAmount = subtotal * discount
    const shippingCost = shipping === 'express' ? 20 : 0
    const total = subtotal - discountAmount + shippingCost

    return (
        <div className="p-6 md:px-16 bg-[#fffaf7] min-h-screen mt-8">
            <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

            {/* Cart Items */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="flex gap-4 p-4 bg-white rounded shadow">
                            <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">${item.price}</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <label className="text-sm">Qty:</label>
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={e => updateQuantity(item.id, +e.target.value)}
                                        className="w-16 border rounded px-2 py-1 text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 text-sm hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="p-4 bg-white rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">Summary</h2>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shippingCost}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Promo Code */}
                    <div className="space-y-2">
                        <label htmlFor="promo" className="text-sm">Promo Code</label>
                        <input
                            id="promo"
                            value={promoCode}
                            onChange={e => setPromoCode(e.target.value)}
                            placeholder="e.g. LOVE10"
                            className="w-full border px-3 py-1 rounded text-sm"
                        />
                        <button
                            onClick={applyPromo}
                            className="w-full text-sm bg-black hover:bg-gray-900 text-white py-2 rounded"
                        >
                            Apply Promo
                        </button>
                    </div>
                </div>
            </div>

            {/* Checkout Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
                {/* Shipping */}
                <div className="p-4 bg-white rounded shadow space-y-4">
                    <h2 className="font-medium text-lg">Shipping Method</h2>
                    <div className="space-y-2 text-sm">
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                value="standard"
                                checked={shipping === 'standard'}
                                onChange={() => setShipping('standard')}
                            />
                            Standard Shipping (Free)
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                value="express"
                                checked={shipping === 'express'}
                                onChange={() => setShipping('express')}
                            />
                            Express Shipping ($20)
                        </label>
                    </div>
                </div>

                {/* Payment */}
                <div className="p-4 bg-white rounded shadow space-y-4">
                    <h2 className="font-medium text-lg">Payment Method</h2>
                    <div className="space-y-2 text-sm">
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                value="card"
                                checked={payment === 'card'}
                                onChange={() => setPayment('card')}
                            />
                            Credit / Debit Card
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                value="paypal"
                                checked={payment === 'paypal'}
                                onChange={() => setPayment('paypal')}
                            />
                            PayPal
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                value="cod"
                                checked={payment === 'cod'}
                                onChange={() => setPayment('cod')}
                            />
                            Cash on Delivery
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-right">
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded text-sm">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}