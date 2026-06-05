import React from 'react'
import { motion } from "motion/react";
import FWD from './assets/FWD-Services.jpg'

const lines = [
  "From responsive websites to modern web applications, I help businesses, startups,",
  " and individuals create engaging digital experiences that combine design,",
  "performance, and usability.",
];

const headingTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const paragraphTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

// Premium, smooth transitions specifically crafted for the grid cards
const premiumCardTransition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1], // Luxury custom cubic-bezier ease-out
};

function AnimatedHeading({ children, className }) {
  return (
    <h1 className={`${className} overflow-hidden`}>
      {children.split("").map((letter, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              ...headingTransition,
              delay: index * 0.05,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

// Optimized component for card headings: moves the whole line cleanly
function PremiumCardHeading({ children, className }) {
  return (
    <div className="overflow-hidden">
      <motion.h3
        className={className}
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={premiumCardTransition}
      >
        {children}
      </motion.h3>
    </div>
  );
}

// Optimized component for card paragraphs: elegant fade + slight upward drift
function PremiumCardParagraph({ children, className }) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ...premiumCardTransition, delay: 0.15 }} // Delays slightly to follow the heading cleanly
    >
      {children}
    </motion.p>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-white px-5 py-12 text-black md:px-10">
      <div className='flex flex-col lg:flex-row justify-between mb-16 gap-6'>
        <AnimatedHeading className="text-6xl font-bold tracking-tighter">
          Services
        </AnimatedHeading>
        
        <div className="max-w-4xl text-2xl leading-tight font-medium tracking-tighter text-black/70">
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ...paragraphTransition,
                  delay: index * 0.1,
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-black h-100 bg-cover bg-center bg-no-repeat flex items-end mb-20' style={{backgroundImage:`url(${FWD})`}}>
        <p className='text-6xl font-semibold tracking-tighter text-white mix-blend-difference p-6'>Frontend Web Development</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20'>
        {/* Item 1 */}
        <div className='md:border-r border-black/20 md:pr-6 project-card-tr'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Business Website Development
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            Professional websites designed to help businesses establish credibility, showcase their services, and attract potential customers online.
          </PremiumCardParagraph>
        </div>
        
        {/* Item 2 */}
        <div className='lg:border-r border-black/20 md:pr-6'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Landing Page Development
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            High-converting landing pages designed to capture attention, communicate value clearly, and encourage visitors to take action.
          </PremiumCardParagraph>
        </div>
        
        {/* Item 2 */}
        <div className='md:border-r lg:border-r-0 border-black/20 md:pr-6 lg:pr-0'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Website Redesign
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            Transforming outdated websites into modern, visually appealing, and user-friendly experiences that better represent your brand.
          </PremiumCardParagraph>
        </div>
        
        {/* Item 4 */}
        <div className='lg:border-r border-black/20 md:pr-6'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Portfolio Website Development
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            Creating personal and professional portfolio websites that showcase skills, projects, and achievements in a polished and memorable way.
          </PremiumCardParagraph>
        </div>
        
        {/* Item 5 */}
        <div className='md:border-r border-black/20 md:pr-6 lg:pr-6'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Responsive Website Development
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            Building websites that provide a seamless experience across desktops, tablets, and mobile devices, ensuring accessibility for every visitor.
          </PremiumCardParagraph>
        </div>
        
        {/* Item 6 */}
        <div className='md:pr-6 lg:pr-0'>
          <PremiumCardHeading className='text-2xl tracking-tighter leading-tight font-semibold mb-4'>
            Interactive Web Experiences
          </PremiumCardHeading>
          <PremiumCardParagraph className='text-xl tracking-tighter leading-normal text-black/70'>
            Adding engaging animations, smooth interactions, and modern user experiences that make websites more memorable and enjoyable to use.
          </PremiumCardParagraph>
        </div>
      </div>
    </div>
  )
}

export default Services