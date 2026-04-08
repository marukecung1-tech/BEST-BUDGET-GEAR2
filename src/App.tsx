import React, { useState, useEffect } from 'react';
import { X, Facebook, Twitter, Mail, Music2, MessageSquare, ShoppingBag } from 'lucide-react';

// --- A-Frame Component ---
const AFrameLogo = () => {
  return (
    <div className="w-16 h-16 relative">
      {/* @ts-ignore */}
      <a-scene embedded vr-mode-ui="enabled: false" background="transparent: true" style={{ width: '100%', height: '100%' }}>
        {/* @ts-ignore */}
        <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear">
          {/* @ts-ignore */}
          <a-box color="#ffffff" scale="0.5 0.5 0.5" position="0 0 0" wireframe="true"></a-box>
          {/* @ts-ignore */}
          <a-text value="BBG" color="#ffffff" align="center" position="0 0 0.6" scale="1.5 1.5 1.5"></a-text>
        {/* @ts-ignore */}
        </a-entity>
        {/* @ts-ignore */}
        <a-camera position="0 0 2" look-controls="enabled: false" wasd-controls="enabled: false"></a-camera>
      {/* @ts-ignore */}
      </a-scene>
    </div>
  );
};

const categories = [
  { id: 'pc', name: 'PC', img: '/images/pcset.jpg' },
  { id: 'mouse', name: 'MOUSE', img: '/images/mousegaming_icon.jpg' },
  { id: 'chair', name: 'CHAIR', img: '/images/gamingchairicon.jpg' },
  { id: 'headset', name: 'HEADSET', img: '/images/headsetgaming.jpg' },
  { id: 'keyboard', name: 'KEYBOARD', img: '/images/keyboardicon.jpg' },
  { id: 'other', name: 'OTHER', img: '/images/othericon.jpg' },
];

const bestRightNow = [
  { id: 'br1', img: '/images/best1.jpg' },
  { id: 'br2', img: '/images/best2.jpg' },
  { id: 'br3', img: '/images/best3.jpg' },
  { id: 'br4', img: '/images/best4.png' },
];

const mouseProducts = [
  { 
    id: 'm1', 
    name: 'ATK GEAR Dragonfly A9', 
    img: '/images/mouse/a9.png', 
    price: 24.98,
    brand: 'ATK GEAR',
    brandLogo: 'ATK',
    brandColor: '#ee4d2d',
    fullName: 'ATK GEAR Dragonfly A9 SERIES LIGHTWEIGHT WIRELESS MOUSE',
    description: 'Classic Feel, Redefined Control with a Unique Experience',
    models: ['A9 SE', 'A9', 'A9 Plus', 'A9 Pro', 'A9 Pro Max', 'A9 Ultra', 'A9 Air'],
    features: [
      { title: 'Minimum to 53g Lightweight', desc: 'Weighing as light as 53g while maintaining structural integrity, the ATK Dragonfly A9 is designed to be lighter than comparable products on the market. This weight reduction helps minimize hand fatigue, enhance maneuverability, and enable quicker reactions in FPS, MOBA, and RTS games.' }
    ]
  },
  { 
    id: 'm2', 
    name: 'VGN Dragonfly F2', 
    img: '/images/mouse/f2.png', 
    price: 39.99,
    brand: 'VGN',
    brandLogo: 'VGN',
    brandColor: '#3b82f6',
    fullName: 'VGN Dragonfly F2 SERIES LIGHTWEIGHT WIRELESS MOUSE',
    description: 'Next-generation precision and ultra-lightweight design.',
    models: ['F2', 'F2 Pro', 'F2 Pro Max'],
    features: [
      { title: 'Ultra-lightweight Design', desc: 'Experience the ultimate freedom of movement with the VGN Dragonfly F2. Its meticulously crafted shell ensures a feather-light feel without compromising on durability.' }
    ]
  },
  { 
    id: 'm3', 
    name: 'KYSONA Jupiter', 
    img: '/images/mouse/jupiter.png', 
    price: 45.00,
    brand: 'KYSONA',
    brandLogo: 'KYS',
    brandColor: '#eab308',
    fullName: 'KYSONA Jupiter Superlight Wireless Gaming Mouse',
    description: 'Ergonomic design with top-tier performance.',
    models: ['Jupiter', 'Jupiter Pro'],
    features: [
      { title: 'Ergonomic Excellence', desc: 'Designed for long gaming sessions, the KYSONA Jupiter provides unparalleled comfort and grip, ensuring your hand stays relaxed even during intense matches.' }
    ]
  },
  { 
    id: 'm4', 
    name: 'Rapoo VT7 MAX', 
    img: '/images/mouse/VT7MAX.png', 
    price: 49.99,
    brand: 'Rapoo',
    brandLogo: 'RAP',
    brandColor: '#10b981',
    fullName: 'Rapoo VT7 MAX Wireless Gaming Mouse',
    description: 'Maximum performance for competitive gaming.',
    models: ['VT7 MAX'],
    features: [
      { title: 'Advanced Wireless Tech', desc: 'The Rapoo VT7 MAX features cutting-edge wireless technology for zero-latency gaming, giving you the edge you need to dominate the competition.' }
    ]
  },
  { 
    id: 'm5', 
    name: 'Attack Shark R5', 
    img: '/images/mouse/R5.png', 
    price: 49.00,
    brand: 'Attack Shark',
    brandLogo: 'ATS',
    brandColor: '#ef4444',
    fullName: 'Attack Shark R5 Lightweight Wireless Mouse',
    description: 'Aggressive performance, lightweight body.',
    models: ['R5', 'R5 Pro'],
    features: [
      { title: 'Magnesium Alloy Body', desc: 'Built with a premium magnesium alloy exoskeleton, the Attack Shark R5 offers incredible strength at a fraction of the weight of traditional mice.' }
    ]
  },
  { 
    id: 'm6', 
    name: 'VXE MAD R Series', 
    img: '/images/mouse/madR.png', 
    price: 35.99,
    brand: 'VXE',
    brandLogo: 'VXE',
    brandColor: '#8b5cf6',
    fullName: 'VXE MAD R Series Wireless Gaming Mouse',
    description: 'Mad performance, refined control.',
    models: ['MAD R', 'MAD R Major', 'MAD R Major Plus'],
    features: [
      { title: 'Top-tier Sensor', desc: 'Equipped with the latest flagship sensor, the VXE MAD R delivers pixel-perfect tracking and unmatched accuracy for the most demanding gamers.' }
    ]
  },
];

const HomeView = ({ setView }: { setView: (v: 'home' | 'category') => void }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="h-[80vh] relative flex items-center p-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-zinc-900">
          <img src="/images/pcsetup.jpg" alt="PC Setup" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="max-w-3xl z-10">
          <h1 className="font-heading italic font-bold text-7xl md:text-8xl leading-[0.9] tracking-tight text-white drop-shadow-lg">
            UNBEATABLE VALUE:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">BEST BUDGET</span><br/>
            GAMING GEAR.
          </h1>
          <p className="text-2xl italic mt-6 text-gray-300 font-heading tracking-wide">Dominate for less...</p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="p-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:h-[600px] lg:h-[800px]">
          {/* PC CASE */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[250px] md:min-h-0">
            <img src={categories[0].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-4xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[0].name}</span>
            </div>
          </div>

          {/* MOUSE */}
          <div className="md:col-span-2 md:row-span-3 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[300px] md:min-h-0" onClick={() => setView('category')}>
            <img src={categories[1].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-5xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[1].name}</span>
            </div>
          </div>

          {/* CHAIR */}
          <div className="md:col-span-1 md:row-span-3 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[300px] md:min-h-0">
            <img src={categories[2].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-4xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[2].name}</span>
            </div>
          </div>

          {/* HEADSET */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[250px] md:min-h-0">
            <img src={categories[3].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-4xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[3].name}</span>
            </div>
          </div>

          {/* KEYBOARD */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[200px] md:min-h-0">
            <img src={categories[4].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-5xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[4].name}</span>
            </div>
          </div>

          {/* OTHER */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1e2128] border border-white/5 rounded-xl cursor-pointer flex items-center justify-center min-h-[200px] md:min-h-0">
            <img src={categories[5].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading italic font-bold text-4xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{categories[5].name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Banner */}
      <section className="bg-[#222] py-12 border-y border-white/5">
        <div className="flex justify-center gap-16 items-center flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-heading font-bold text-2xl italic">ATK GEAR</span>
          <span className="font-heading font-bold text-2xl italic">KYSOMA</span>
          <span className="font-heading font-bold text-2xl italic">VGN</span>
          <span className="font-heading font-bold text-2xl italic">AULA</span>
          <span className="font-heading font-bold text-2xl italic">RAPOO</span>
        </div>
      </section>

      {/* The Best Right Now */}
      <section className="p-16 max-w-[1600px] mx-auto">
        <h2 className="font-heading italic font-bold text-6xl text-center mb-12 tracking-tight">THE BEST RIGHT NOW</h2>
        <div className="grid grid-cols-4 gap-6">
          {bestRightNow.map((item, i) => (
            <div key={item.id} className="bg-zinc-800 aspect-square relative group overflow-hidden border border-white/10 flex items-center justify-center">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-heading italic font-bold text-xl">Product {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-20 text-center bg-gradient-to-b from-transparent to-black/50">
        <h2 className="font-heading italic font-bold text-5xl md:text-6xl tracking-tight">WE RECOMMEND THE BEST TO YOU.</h2>
      </section>
    </div>
  );
};

const CategoryView = ({ setSelectedProduct }: { setSelectedProduct: (p: any) => void }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <div className="h-[50vh] relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-zinc-800">
          <img src="/images/mousepageBG.jpg" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-12 right-12">
          <h1 className="font-heading italic font-bold text-8xl tracking-tighter drop-shadow-2xl">MOUSE</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-8 relative min-h-screen">
        {/* Techy background placeholder */}
        <div className="absolute inset-0 -z-10 bg-[#15171c] overflow-hidden">
           {/* Abstract lines/dots representation */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           <div className="absolute top-1/4 left-0 right-0 h-px bg-blue-500/20"></div>
           <div className="absolute top-2/4 left-0 right-0 h-px bg-blue-500/20"></div>
           <div className="absolute top-3/4 left-0 right-0 h-px bg-blue-500/20"></div>
           <div className="absolute top-0 bottom-0 left-1/3 w-px bg-blue-500/20"></div>
           <div className="absolute top-0 bottom-0 left-2/3 w-px bg-blue-500/20"></div>
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-black/80 text-blue-400 px-4 py-2 rounded font-mono text-sm border border-blue-500/30">
                [PLACEHOLDER: TECH LINES/DOTS BACKGROUND]
              </span>
           </div>
        </div>

        <h2 className="font-heading italic font-bold text-6xl text-center mb-20 tracking-tight">BEST BUDGET MOUSE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {mouseProducts.map((p, i) => (
            <div key={p.id} className="cursor-pointer group relative" onClick={() => setSelectedProduct(p)}>
              {/* Decorative connection lines */}
              <div className="absolute -top-6 left-1/2 w-px h-6 bg-blue-500/30"></div>
              <div className="absolute top-1/2 -left-6 w-6 h-px bg-blue-500/30"></div>
              
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 aspect-square flex items-center justify-center relative overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-colors duration-300 shadow-xl">
                 <img src={p.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl" />
                 
                 {/* Overlay info */}
                 <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center border-t border-white/10">
                   <span className="font-heading italic font-bold text-lg tracking-wide">{p.name}</span>
                   <span className="text-blue-400 font-bold">${p.price}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-16 px-8 overflow-hidden border-t border-white/10 mt-auto">
      {/* Placeholder for Keyboard Background */}
      <div className="absolute inset-0 -z-20 bg-zinc-950">
         <img src="/images/keyboardbg.png" alt="Keyboard Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
      </div>
      
      {/* Hexagon pattern overlay placeholder */}
      <div className="absolute inset-0 -z-10 opacity-10" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent -z-10" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-12">
        <h3 className="font-heading italic font-bold text-6xl tracking-tighter drop-shadow-lg">CONTACT</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 font-heading italic tracking-wider text-lg">
          <a href="#" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
            <div className="p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors"><Facebook size={20} /></div>
            THE BEST BUDGET
          </a>
          <a href="#" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
            <div className="p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors"><Music2 size={20} /></div>
            THE BEST BUDGET
          </a>
          <a href="#" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
            <div className="p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors"><Twitter size={20} /></div>
            THE BEST BUDGET
          </a>
          <a href="#" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
            <div className="p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors"><MessageSquare size={20} /></div>
            THE BEST BUDGET
          </a>
          <a href="#" className="flex items-center gap-4 hover:text-blue-400 transition-colors group md:col-span-2 justify-center mt-4">
            <div className="p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors"><Mail size={20} /></div>
            THEBESTBUDGET@GMAIL.COM
          </a>
        </div>
      </div>
    </footer>
  );
};

const ProductModal = ({ product, onClose }: { product: any, onClose: () => void }) => {
  const [selectedModel, setSelectedModel] = useState(product.models?.[0] || '');

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div className="bg-[#1e2128] w-full max-w-6xl h-full max-h-[85vh] flex flex-col md:flex-row relative border border-white/10 shadow-2xl overflow-hidden rounded-lg">
        
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full backdrop-blur-md transition-colors" 
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#252932] to-[#1a1c23] relative">
          <div className="absolute top-8 left-8 flex items-center gap-2 opacity-50">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold italic" style={{ backgroundColor: product.brandColor || '#ee4d2d' }}>{product.brandLogo || 'ATK'}</div>
            <span className="font-heading italic font-bold tracking-widest text-sm uppercase">{product.brand || 'ATK GEAR'}</span>
          </div>
          
          <img src={product.img} className="w-3/4 max-h-full object-contain drop-shadow-2xl animate-in zoom-in duration-500" alt={product.name} />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-[#1a1c23]">
          <h2 className="font-heading italic font-bold text-4xl md:text-5xl mb-3 tracking-tight leading-tight uppercase">{product.fullName || product.name}</h2>
          <p className="text-gray-400 text-sm mb-8 font-medium">{product.description || 'Classic Feel, Redefined Control with a Unique Experience'}</p>

          <div className="text-5xl font-bold mb-6 tracking-tight">${product.price}</div>

          <div className="mb-6 flex items-center gap-3">
            <span className="font-bold text-gray-400 uppercase tracking-wider text-sm">Model:</span> 
            <span className="text-xl font-medium">{selectedModel}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {(product.models || []).map((m: string) => (
              <button 
                key={m} 
                onClick={() => setSelectedModel(m)}
                className={`border px-4 py-2 text-sm font-medium transition-all duration-200 ${m === selectedModel ? 'border-white bg-white text-black' : 'border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5'}`}
              >
                {m}
              </button>
            ))}
          </div>

          <button 
            className="text-white px-8 py-4 font-bold flex items-center justify-center gap-3 mb-12 w-full md:w-auto rounded transition-colors shadow-lg"
            style={{ backgroundColor: product.brandColor || '#ee4d2d', boxShadow: `0 10px 15px -3px ${product.brandColor || '#ee4d2d'}33` }}
          >
            <ShoppingBag size={20} /> 
            <span className="tracking-wider">BUY ON SHOPEE</span>
          </button>

          <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
            {(product.features || []).map((feature: any, idx: number) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-2 text-base">{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'category'>('home');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-sm fixed w-full top-0 z-40 border-b border-white/10">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
          <AFrameLogo />
          <span className="font-heading italic font-bold text-2xl tracking-wider">BEST BUDGET GEAR</span>
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-heading">
          <button className="hover:text-gray-400 transition-colors" onClick={() => setView('home')}>Home</button>
          <button className="hover:text-gray-400 transition-colors">Sort</button>
          <button className="hover:text-gray-400 transition-colors">The Best Right Now</button>
          <button className="hover:text-gray-400 transition-colors">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 flex-grow">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'category' && <CategoryView setSelectedProduct={setSelectedProduct} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
