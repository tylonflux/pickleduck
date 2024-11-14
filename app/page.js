'use client';

import { Twitter, Send } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Pattern and Gradient Overlays */}
      <div className="absolute inset-0 bg-[url('/images/pickle-pattern.png')] bg-repeat opacity-60 animate-subtle-drift"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-800/90 to-green-600/90 backdrop-blur-sm"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
 {/* Hero Section with Floating Character */}
<div className="relative max-w-6xl mx-auto mb-16">
  {/* Character Image Floating */}
  <div className="absolute top-0 right-0 w-1/4 transform -translate-y-1/4 animate-float">
  <div className="aspect-square rounded-full overflow-hidden bg-white/10 backdrop-blur-sm p-2">
    <div className="relative w-full h-full">
      <Image 
        src="/images/pickleduck.png" 
        alt="Toking Pickle Duck" 
        fill={true}
        className="object-cover rounded-full"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(134,239,172,0.3))',
        }}
        priority={true}
      />
    </div>
  </div>
</div>

  {/* Social Links */}
<div className="flex justify-center space-x-8">
  {/* X (Twitter) */}
  <a 
    href="https://x.com/pklduk" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
      <path 
        fill="currentColor" 
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  </a>

  {/* Dexscreener */}
<a 
  href="https://pump.fun/coin/CLXpdoSjb3ih154jG3ufSnzBq9M79uQrtdbij4S8pump" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
>
  <div className="relative w-6 h-6">
    <Image 
      src="/images/dexscreener-logo.png" 
      alt="Dexscreener" 
      fill={true}
      className="invert"
      sizes="24px"  // since w-6 = 24px
    />
  </div>
</a>

  {/* Pump.fun */}
<a 
  href="https://pump.fun/coin/CLXpdoSjb3ih154jG3ufSnzBq9M79uQrtdbij4S8pump" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
>
  <div className="relative w-6 h-6">
    <Image 
      src="/images/pumpfun-logo.png" 
      alt="Pump.fun" 
      fill={true}
      sizes="24px"  // since w-6 = 24px
    />
  </div>
</a>
</div>

  {/* Text Content */}
  <div className="text-center pt-32">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
      Pickle Duck
    </h1>
    <div className="text-5xl md:text-6xl font-bold text-green-300 tracking-wider mb-4">
      $PKLDUK
    </div>
  </div>
</div>

        {/* Token Info */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Total Supply</h3>
              <p className="text-green-100">1B</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Token Type</h3>
              <p className="text-green-100">Solana</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Tax</h3>
              <p className="text-green-100">0/0</p>
            </div>
          </div>
        </div>

        {/* Description Section - Alternative Version */}
<div className="max-w-4xl mx-auto mb-16">
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
    <div className="space-y-6">
      {/* Main Tagline with decorator */}
      
      
      {/* Description Paragraphs */}
      <div className="space-y-6 text-green-100/90 leading-relaxed text-lg">
        <p className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
          $PKLDUK isn't just another token – it's a state of mind. A movement. A perfectly preserved paradigm of peace and prosperity. A token that encourages holders to slow down, and pickle their profits.
        </p>
        
        <p className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
          In a world of degen hustle culture, Pickle Duck reminds us that sometimes the best gains come from just dillin' & chillin'.
        </p>
        
        <p className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
          A perfectly brined pickle merged with a particularly chill duck, creating Pickle Duck - the most relaxed entity in the cryptoverse. Some say it was the ambient smoke in the greenhouse that day, others claim it was divine inspiration. All we know is, Pickle Duck emerged as a duck stuck in a pickle and wisdom in its brine.
        </p>
      </div>
      
      {/* Final Tagline */}
      <div className="text-center">
        <p className="text-xl font-bold text-green-300 inline-block border-2 border-green-300/20 rounded-full px-6 py-3 backdrop-blur-sm">
          Get in and stay crispy frens.
        </p>
      </div>
    </div>
  </div>
</div>

       {/* Contract Address Section */}
<div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
  <div className="text-center">
    <h2 className="text-2xl font-bold text-white mb-4">Contract Address</h2>
    
    {/* Address Display with Copy Button */}
    <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-lg p-4 max-w-3xl mx-auto">
      <code className="text-green-300 font-mono text-sm md:text-base break-all">
      CLXpdoSjb3ih154jG3ufSnzBq9M79uQrtdbij4S8pump
      </code>
      <button 
        onClick={() => {
          navigator.clipboard.writeText("7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr");
          // You could add a toast notification here
        }}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-white"
        >
          <path 
            d="M8 4v12h12V4H8zM6 2h16v16H6V2zm2 18v2h14V8h-2v12H8z" 
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    
    {/* Optional: Network Info */}
    <p className="text-green-100/80 mt-4 text-sm">
      Contract deployed on Solana Network
    </p>
  </div>
</div>


      </div>
    </main>
  );
}