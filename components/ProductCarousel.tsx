'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Custom Hemming', image: '/images/hemming.jpg' },
  { id: 2, name: 'Alteration Package', image: '/images/alteration.jpg' },
  { id: 3, name: 'Dress Tailoring', image: '/images/dress.jpg' },
]

export default function ProductCarousel() {
  const [index, setIndex] = useState(0)

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length)
    }, 3000) // 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto my-6 overflow-hidden rounded-lg bg-black">
      <div className="relative aspect-[4/3] md:aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[index].id}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src={products[index].image}
              alt={products[index].name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded">
              {products[index].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
