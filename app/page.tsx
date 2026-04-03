'use client';

import { useState } from 'react';
import { Menu, ChevronLeft, ChevronDown, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const heroSlides = [
  {
    id: 1,
    title: "Sunglasses",
    description: "French know-how with high-technology lenses in order to never be taken by surprise when there is a sharp bright sunny turn in the road.",
    price: "115 €",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Leather Jacket",
    description: "Premium leather crafted for the ultimate driving experience. Windproof and stylish for any occasion.",
    price: "450 €",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Driving Gloves",
    description: "Perforated leather gloves ensuring perfect grip and breathability during long scenic drives.",
    price: "120 €",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Travel Duffle",
    description: "Spacious and elegant weekender bag. Fits perfectly in the trunk of your sports car.",
    price: "320 €",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Top Section with subtle background */}
      <div className="bg-[#f8f9fa] pb-16">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 md:px-12 py-8 max-w-[1600px] mx-auto w-full">
          <div className="flex items-center gap-8 w-1/3">
            <button className="p-2 -ml-2 hover:opacity-70 transition-opacity">
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hidden md:flex items-center gap-2 text-xs font-medium hover:opacity-70 transition-opacity">
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              Back
            </button>
          </div>

          <div className="w-1/3 flex justify-center">
            <div className="text-xl md:text-2xl font-bold tracking-[0.4em] uppercase ml-[0.4em]">
              Alpine
            </div>
          </div>

          <div className="flex items-center justify-end gap-8 text-xs font-medium w-1/3">
            <button className="hover:opacity-70 transition-opacity">
              Cart (2)
            </button>
            <button className="hidden md:flex items-center gap-1 hover:opacity-70 transition-opacity">
              En
              <ChevronDown className="w-3 h-3" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 z-10 lg:pr-16 xl:pr-24 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4 tracking-tight">
                  <span className="text-[#1e40af] font-light text-3xl">/</span> {slide.title}
                </h1>
                <p className="text-gray-500 mb-12 leading-loose text-sm max-w-sm h-24">
                  {slide.description}
                </p>
                <button className="border border-[#1e40af] text-[#1e40af] px-12 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#1e40af] hover:text-white transition-all duration-300">
                  BUY {slide.price}
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-24 lg:mt-40">
              <button className="flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-gray-900 hover:opacity-60 transition-opacity uppercase">
                <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                Product details
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/3 relative mt-20 lg:mt-0">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover mix-blend-multiply"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Pagination */}
            <div className="absolute -bottom-12 right-0 flex items-center gap-8 text-xs font-bold tracking-[0.2em]">
              <span className="w-5 text-right">0{currentSlide + 1}</span>
              <div className="w-24 h-[1px] bg-gray-300"></div>
              <span className="text-gray-400 w-5">0{heroSlides.length}</span>
              <button 
                onClick={nextSlide}
                className="text-[#1e40af] hover:translate-x-2 transition-transform duration-300 cursor-pointer p-2 -mr-2"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Filters */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-xs font-bold tracking-widest">
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <X className="w-3 h-3" strokeWidth={3} /> FASHION
          </button>
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <X className="w-3 h-3" strokeWidth={3} /> TRAVEL
          </button>
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <X className="w-3 h-3" strokeWidth={3} /> EVERY DAY
          </button>
          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            MINIATURES
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#f4f4f4] aspect-[4/5] relative mb-5 overflow-hidden flex items-center justify-center p-8 transition-colors group-hover:bg-[#ebebeb]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-xs text-gray-400 mt-1.5">{product.category}</p>
                </div>
                <span className="text-sm font-medium text-gray-900">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold tracking-widest text-[#1e40af] uppercase">
        <button className="flex items-center gap-1 hover:opacity-70 transition-opacity mb-6 md:mb-0">
          En
          <ChevronDown className="w-3 h-3" strokeWidth={2} />
        </button>
        
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a>
          <span className="text-gray-300 font-light">/</span>
          <a href="#" className="hover:opacity-70 transition-opacity">MEDIA</a>
          <span className="text-gray-300 font-light">/</span>
          <a href="#" className="hover:opacity-70 transition-opacity">LEGAL</a>
          <span className="text-gray-300 font-light">/</span>
          <a href="#" className="hover:opacity-70 transition-opacity">COOKIES</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-70 transition-opacity">Fb</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Tw</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Yt</a>
          <a href="#" className="hover:opacity-70 transition-opacity">In</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Ln</a>
        </div>
      </footer>
    </div>
  );
}

const products = [
  {
    name: 'Black leather Belt',
    category: 'Fashion',
    price: '95 €',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Smartphone case',
    category: 'Every day',
    price: '55 €',
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Leather gloves',
    category: 'Fashion',
    price: '120 €',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Flash drive',
    category: 'Every day',
    price: '15 €',
    image: 'https://images.unsplash.com/photo-1587202372616-9897b670a8f2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Black Courrier',
    category: 'Fashion',
    price: '395 €',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Black Duffle',
    category: 'Fashion',
    price: '420 €',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Lap top holster',
    category: 'Every day',
    price: '195 €',
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Black Workbag',
    category: 'Fashion',
    price: '395 €',
    image: 'https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Wallet',
    category: 'Every day',
    price: '95 €',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80'
  }
];
