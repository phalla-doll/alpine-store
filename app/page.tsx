import { Menu, ChevronLeft, ChevronDown, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
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
        <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-24 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/3 z-10 md:pr-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[#1e40af] font-light text-2xl">/</span> Sunglasses
            </h1>
            <p className="text-gray-600 mb-12 leading-relaxed text-sm max-w-sm">
              French know-how with high-technology lenses in order to never be taken by surprise when there is a sharp bright sunny turn in the road.
            </p>
            <button className="border border-[#1e40af] text-[#1e40af] px-10 py-3.5 text-xs font-bold tracking-widest hover:bg-[#1e40af] hover:text-white transition-colors">
              BUY 115 €
            </button>

            <div className="mt-24 md:mt-32">
              <button className="flex items-center gap-2 text-xs font-bold tracking-wide text-gray-900 hover:opacity-70 transition-opacity">
                <ChevronDown className="w-4 h-4" strokeWidth={2} />
                Product details
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 relative mt-16 md:mt-0">
            <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
              {/* Using a placeholder that looks like a product */}
              <Image
                src="https://picsum.photos/seed/sunglasses_alpine/1200/600"
                alt="Sunglasses"
                fill
                className="object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            
            {/* Pagination */}
            <div className="absolute -bottom-8 right-0 flex items-center gap-6 text-xs font-bold tracking-widest">
              <span>01</span>
              <div className="w-16 h-px bg-gray-300"></div>
              <span className="text-gray-400">04</span>
              <button className="text-[#1e40af] hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
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
    image: 'https://picsum.photos/seed/belt_alpine/600/800'
  },
  {
    name: 'Smartphone case',
    category: 'Every day',
    price: '55 €',
    image: 'https://picsum.photos/seed/case_alpine/600/800'
  },
  {
    name: 'Leather gloves',
    category: 'Fashion',
    price: '120 €',
    image: 'https://picsum.photos/seed/gloves_alpine/600/800'
  },
  {
    name: 'Flash drive',
    category: 'Every day',
    price: '15 €',
    image: 'https://picsum.photos/seed/usb_alpine/600/800'
  },
  {
    name: 'Black Courrier',
    category: 'Fashion',
    price: '395 €',
    image: 'https://picsum.photos/seed/bag1_alpine/600/800'
  },
  {
    name: 'Black Duffle',
    category: 'Fashion',
    price: '420 €',
    image: 'https://picsum.photos/seed/bag2_alpine/600/800'
  },
  {
    name: 'Lap top holster',
    category: 'Every day',
    price: '195 €',
    image: 'https://picsum.photos/seed/laptop_alpine/600/800'
  },
  {
    name: 'Black Workbag',
    category: 'Fashion',
    price: '395 €',
    image: 'https://picsum.photos/seed/bag3_alpine/600/800'
  },
  {
    name: 'Wallet',
    category: 'Every day',
    price: '95 €',
    image: 'https://picsum.photos/seed/wallet_alpine/600/800'
  }
];
