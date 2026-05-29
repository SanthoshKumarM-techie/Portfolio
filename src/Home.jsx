import React from 'react';
import Iridescence from './components/Iridescence';

function Home() {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden select-none text-white">
      
      {/* Background (Untouched Iridescence Component) */}
      <div className="fixed inset-0 -z-10">
        <Iridescence
          color={[0.5,0.6,0.8]} // Blue tone matching the reference vibe
          mouseReact={true}
          amplitude={0.1}
          speed={0.5}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
      </div>

      {/* Main Framework Layout Container */}
      <main className="relative w-full h-full flex flex-col justify-end px-10 md:px-16 pb-[8vh] z-20">
        
        {/* Central Content Block (Creative & Modern Alignment) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-end gap-10 md:gap-16">
          
          {/* Main Hero Name Block (Large, offset alignment like reference) */}
          <div className="md:col-span-8 space-y-2 md:-mb-6">
            <h1 className="text-[8vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter text-white">
                Hey There,<br/>
              I am Santhoshkumar
            </h1>
          </div>

          {/* Service Listing (Aaligned to the right like reference) */}
          <div className="md:col-span-4 self-start md:self-end text-left md:text-right space-y-1 md:pt-10 select-text">
            {["Frontend Developer"].map(service => (
              <span key={service} className="block text-[1.5rem] font-medium tracking-tighter text-white">
                {service}
              </span>
            ))}
          </div>

        </div>

        {/* Bottom Section (Metadata and CTA) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-[10vh]">
          
          {/* Subtext and Socials */}
          <div className="flex flex-col gap-6 max-w-[28rem] select-text">
            <p className="text-[1.3rem] leading-[1.6] text-white tracking-tighter">
              Every pixel crafted creatively, every interaction built thoughtfully, every product made to stay close to the heart.
            </p>
            
            {/* Social Intermediaries (Compact list) */}
            <div className="flex items-center gap-6 text-[1.3rem] font-bold tracking-tighter">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:opacity-70 transition-opacity">
                LinkedIn ↗
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Github ↗
              </a>
            </div>
          </div>

          {/* Action CTA Block (Inspired by the reference booking widget) */}
          <div className="flex items-end gap-4 text-right">
            <div className="select-text space-y-1 pb-1">
              <span className="block text-[1.3rem] font-bold text-white tracking-tighter">Download CV ↓</span>
            </div>
        
          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;
