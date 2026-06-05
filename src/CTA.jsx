import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

function CTA() {
  return (
    <section className="w-full bg-[#fdfdfd] px-5 py-24 text-black md:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl border border-black/10 bg-white rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
        
        {/* Left Aspect Box: Main Proposition Details */}
        <div className="p-8 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/10 min-h-[320px]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">Status // Open for Briefs</p>
            </div>
            
            <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
              Ready to create something unforgettable?
            </h2>
          </div>

          <p className="mt-12 md:mt-0 text-sm tracking-tight text-neutral-500 max-w-sm leading-relaxed">
            Drop me a line with your ideas, timeline, and goals. Let's craft an exceptional digital experience together.
          </p>
        </div>

        {/* Right Aspect Box: Interactive Kinetic Action Strips */}
        <div className="flex flex-col">
          
          {/* Action Row 1: Direct Inbound Email Link */}
          <motion.a 
            href="mailto:your.email@example.com"
            className="group relative flex-1 flex flex-col justify-between p-8 md:p-12 border-b border-black/10 overflow-hidden min-h-[200px]"
            whileHover="hover"
          >
            {/* Slide-Up Solid Interaction Sheet */}
            <motion.div 
              className="absolute inset-0 bg-black z-0"
              initial={{ y: "100%" }}
              variants={{ hover: { y: 0 } }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            />

            {/* Top Text Meta Block */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xs font-mono tracking-wider text-neutral-400 group-hover:text-neutral-400/70 transition-colors duration-300">
                [ DIRECT ROUTE ]
              </span>
              <Mail className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Bottom Brand Action Link */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-8">
              <h3 className="text-xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                Send an Email
              </h3>
              <motion.div
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.a>

          {/* Action Row 2: Secondary Content Router */}
          <motion.a 
            href="#calendar"
            className="group relative flex-1 flex flex-col justify-between p-8 md:p-12 overflow-hidden min-h-[200px]"
            whileHover="hover"
          >
            {/* Slide-Up Solid Interaction Sheet */}
            <motion.div 
              className="absolute inset-0 bg-neutral-100 z-0"
              initial={{ y: "100%" }}
              variants={{ hover: { y: 0 } }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            />

            {/* Top Text Meta Block */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xs font-mono tracking-wider text-neutral-400 group-hover:text-neutral-500 transition-colors duration-300">
                [ INTRO SYNC ]
              </span>
            </div>

            {/* Bottom Brand Action Link */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-8">
              <h3 className="text-xl font-medium tracking-tight text-black transition-colors duration-300">
                Schedule a Call
              </h3>
              <motion.div
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-black transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}

export default CTA;