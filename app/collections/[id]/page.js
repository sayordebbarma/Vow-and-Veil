'use client'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Product Details for ID: {productId}</h1>
      {/* Fetch actual product data here using the id */}
    </div>
  )
}