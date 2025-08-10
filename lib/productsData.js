export const products = [
    {
      id: 1,
      sku: 'VAV-CP-001',
      name: 'Elegant Couple Attire',
      price: 5999,
      price_display: '₹5,999',
      category: 'Couple Sets',
      isCouple: true,
      images: [
        '/products/couple1.jpg',
        '/products/couple1-2.jpg',
        '/products/couple1-3.jpg'
      ],
      image: '/products/couple1.jpg',
      sizes: {
        bride: ['XS', 'S', 'M', 'L', 'XL'],
        groom: ['S', 'M', 'L', 'XL', 'XXL']
      },
      stock: 12,
      bestSeller: true,
      tags: ['couple', 'linen', 'summer'],
      createdAt: '2024-06-01T10:00:00Z',
      href: '/collections/elegant-couple-attire',
      description:
        'A coordinated duo set crafted for modern couples — breathable linen blend for day ceremonies and refined finishing for evening receptions.'
    },
  
    {
      id: 2,
      sku: 'VAV-BD-001',
      name: 'Bridal Gown Luxe',
      price: 11999,
      price_display: '₹11,999',
      category: 'Bride Dresses',
      isCouple: false,
      images: [
        '/products/couple4.jpg',
        '/products/couple4-2.jpg',
        '/products/couple4-3.jpg'
      ],
      image: '/products/couple4.jpg',
      sizes: { default: ['XS', 'S', 'M', 'L', 'XL'] },
      stock: 8,
      bestSeller: true,
      tags: ['bridal', 'lace', 'editorial'],
      createdAt: '2024-06-03T12:00:00Z',
      href: '/collections/bridal-gown-luxe',
      description:
        'Elegant lace gown with a soft A-line silhouette, hand-stitched beading and cathedral train — made for timeless ceremonies.'
    },
  
    {
      id: 3,
      sku: 'VAV-GM-001',
      name: 'Groom Classic Suit',
      price: 5999,
      price_display: '₹5,999',
      category: 'Groom Suits',
      isCouple: false,
      images: ['/products/couple6.jpg', '/products/couple6-2.jpg'],
      image: '/products/couple6.jpg',
      sizes: { default: ['S', 'M', 'L', 'XL', 'XXL'] },
      stock: 10,
      bestSeller: false,
      tags: ['groom', 'tailored'],
      createdAt: '2024-06-05T09:00:00Z',
      href: '/collections/groom-classic-suit',
      description:
        'Sharp tailoring, breathable interior lining and hand-finished seams — a modern classic tuxedo for the groom.'
    },
  
    {
      id: 4,
      sku: 'VAV-AC-001',
      name: 'Vintage Ring Set',
      price: 9999,
      price_display: '₹9,999',
      category: 'Accessories',
      isCouple: false,
      images: ['/products/couple8.jpg', '/products/couple8-2.jpg'],
      image: '/products/couple8.jpg',
      sizes: { default: [] },
      stock: 20,
      bestSeller: false,
      tags: ['rings', 'jewelry', 'vintage'],
      createdAt: '2024-06-07T15:00:00Z',
      href: '/collections/vintage-ring-set',
      description: 'Antique-inspired ring pair — ethically sourced metals with hand-set stones.'
    },
  
    {
      id: 5,
      sku: 'VAV-BD-002',
      name: 'Bridal Gown Luxe — Off White',
      price: 11999,
      price_display: '₹11,999',
      category: 'Bride Dresses',
      isCouple: false,
      images: ['/products/couple4b.jpg', '/products/couple4b-2.jpg'],
      image: '/products/couple4b.jpg',
      sizes: { default: ['XS', 'S', 'M', 'L', 'XL'] },
      stock: 6,
      bestSeller: false,
      tags: ['bridal', 'offwhite'],
      createdAt: '2024-06-09T11:00:00Z',
      href: '/collections/bridal-gown-luxe-offwhite',
      description: 'Same luxe silhouette in a subtle off-white shade for warmer destinations.'
    },
  
    {
      id: 6,
      sku: 'VAV-CP-002',
      name: 'Ivory Lace Couple Ensemble',
      price: 12999,
      price_display: '₹12,999',
      category: 'Couple Sets',
      isCouple: true,
      images: [
        '/products/couple1.jpg',
        '/products/couple1-alt.jpg',
        '/products/couple1-close.jpg'
      ],
      image: '/products/couple1.jpg',
      sizes: {
        bride: ['XS', 'S', 'M', 'L', 'XL'],
        groom: ['S', 'M', 'L', 'XL', 'XXL']
      },
      stock: 5,
      bestSeller: true,
      tags: ['ivory', 'lace', 'romantic'],
      createdAt: '2024-06-10T10:00:00Z',
      href: '/collections/ivory-lace-couple-ensemble',
      description:
        'A delicate ivory set — bridal lace matched with a tailored groom coat for perfect harmony.'
    },
  
    {
      id: 7,
      sku: 'VAV-BD-003',
      name: 'Minimalist Bride Gown',
      price: 8499,
      price_display: '₹8,499',
      category: 'Bride Dresses',
      isCouple: false,
      images: ['/products/couple2.jpg', '/products/couple2-2.jpg'],
      image: '/products/couple2.jpg',
      sizes: { default: ['XS', 'S', 'M', 'L', 'XL'] },
      stock: 7,
      bestSeller: false,
      tags: ['minimal', 'clean-lines'],
      createdAt: '2024-06-11T10:00:00Z',
      href: '/collections/minimalist-bride-gown',
      description: 'Clean lines and soft silk for a modern bride who wants effortless elegance.'
    },
  
    {
      id: 8,
      sku: 'VAV-GM-002',
      name: 'Classic Groom Tuxedo',
      price: 9999,
      price_display: '₹9,999',
      category: 'Groom Suits',
      isCouple: false,
      images: ['/products/couple3.jpg', '/products/couple3-2.jpg'],
      image: '/products/couple3.jpg',
      sizes: { default: ['S', 'M', 'L', 'XL', 'XXL'] },
      stock: 9,
      bestSeller: false,
      tags: ['tuxedo', 'classic'],
      createdAt: '2024-06-12T10:00:00Z',
      href: '/collections/classic-groom-tuxedo',
      description: 'A timeless tuxedo with satin lapel and tailored silhouette.'
    }
  ]