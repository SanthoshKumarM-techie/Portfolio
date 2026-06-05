import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from 'lucide-react';
import SCBG1 from './assets/SCBG1.jpg'
import SCBG2 from './assets/SCBG2.jpg'
import SCBG3 from './assets/SCBG3.jpg'
import code from './assets/code.jpg'
import CTA from './CTA';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

function HomeBrief() {
  const projects = [
    { id: 1, title: "Project One", bg: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800')" },
    { id: 2, title: "Project Two", bg: "url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800')" },
    { id: 3, title: "Project Three", bg: "url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800')" },
    { id: 4, title: "Project Four", bg: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800')" },
  ];

  const UIUXservices = [
    "Website UI/UX Design",
    "Mobile App Design",
    "Web Application Design",
    "Landing Page Design", 
    "Website Redesign",
    "Dashboard & Admin Panel Design"
  ];

  const FWDservices = [
    "Business Website Development",
    "Landing Page Development",
    "Website Redesign",
    "Portfolio Website Development", 
    "Responsive Website Development",
    "Interactive Web Experiences"
  ];

  const GDservices = [
    "Social Media Design",
    "Marketing & Promotional Materials",
    "Print Design",
  ];

  // --- Testimonials Data Dictionary ---
  const testimonials = [
    {
      id: 1,
      name: "Vigneshwaran",
      role: "Working Professional",
      quote: "Santhosh is a talented designer who delivered exceptional results for our project. His attention to detail and creative approach made all the difference."
    },
    {
      id: 2,
      name: "Anjali Sharma",
      role: "Product Manager",
      quote: "Working with Santhosh was seamless. He took our complex dashboard concepts and transformed them into clean, highly intuitive interfaces."
    },
    {
      id: 3,
      name: "David Miller",
      role: "Startup Founder",
      quote: "Incredible speed and precision. The frontend experience he developed is exceptionally fast, fully responsive, and precisely matches our design files."
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Marketing Director",
      quote: "Our landing page conversion rate increased dramatically after the redesign. Santhosh has a true gift for blending marketing intent with gorgeous UI."
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "E-commerce Owner",
      quote: "Outstanding attention to visual branding elements. The social assets and matching web graphics perfectly captured our premium brand identity."
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Tech Lead",
      quote: "Santhosh brings a rare combination of pure visual creative design skills backed by reliable structural frontend execution code. Highly recommended."
    }
  ];

  // Services Premium Section Animation Variants
  const bgRevealVariants = {
    hidden: { height: "0%" },
    visible: { 
      height: "100%",
      transition: { duration: 1.1, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const contentContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5 
      }
    }
  };

  const titleLeftVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  // Scroll Target Reference for the expansion section
  const expandSectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: expandSectionRef,
    offset: ["start start", "end end"]
  });

  // Smoothly maps scroll progression to dimension properties
  const cardWidth = useTransform(scrollYProgress, [0, 0.85], ["37.5rem", "100%"]);
  const cardHeight = useTransform(scrollYProgress, [0, 0.85], ["25rem", "100vh"]);
  const cardBorderRadius = useTransform(scrollYProgress, [0, 0.75], ["8px", "0px"]);

  // --- Scroll References for About Text Tracking ---
  const aboutScrollRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutScrollRef,
    offset: ["start start", "end end"]
  });

  const text1Color = useTransform(aboutProgress, [0, 0.25], ["rgba(255,255,255,0.25)", "rgba(255,255,255,1)"]);
  const text2Color = useTransform(aboutProgress, [0.2, 0.55], ["rgba(255,255,255,0.25)", "rgba(255,255,255,1)"]);
  const text3Color = useTransform(aboutProgress, [0.5, 0.85], ["rgba(255,255,255,0.25)", "rgba(255,255,255,1)"]);

  const aboutRevealVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  // --- Viewport Entry Animation for Testimonials Block ---
  const testimonialContainerVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  // REFACTORED: Utilizes Framer Motion whileHover definitions to handle smooth hardware scaling + lift simultaneously
  const renderTestimonialCard = (item, key) => (
    <motion.div 
      key={key}
      className="testimonial-card relative h-100 w-85 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black select-none cursor-pointer"
      whileHover={{ 
        scale: 1.04, 
        y: -8, 
        borderColor: "rgba(255, 255, 255, 0.25)",
        zIndex: 10
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="absolute inset-0 testimonial-stars" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(83,56,255,0.55),transparent_36%),linear-gradient(155deg,rgba(38,0,191,0.85),rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.78))]" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="p-5 pb-0">
          <Quote className="h-15 w-15 text-white/45" aria-hidden="true" />
        </div>

        <div>
          <p className="p-5 text-md leading-tight tracking-tighter text-white">
            "{item.quote}"
          </p>
          <div className='flex gap-3 items-center p-5'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-white to-white/55 ring-2 ring-white/30'></div>
            <div>
              <p className='text-lg text-white font-semibold tracking-tighter'>{item.name}</p>
              <p className='text-sm text-white/70 tracking-tighter'>{item.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div>
      {/* SECTION 1: UNTOUCHED */}
      <section className="min-h-screen bg-white px-5 py-12 text-black md:px-10">
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">What I have done for clients</h1>
        
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const isSecondInRow = index % 2 !== 0;

            const revealVariants = {
              hidden: { height: "0%" },
              visible: { 
                height: "100%",
                transition: { 
                  duration: 1.2, 
                  ease: [0.25, 1, 0.5, 1],
                  delay: isSecondInRow ? 0.35 : 0 
                }
              }
            };

            return (
              <motion.div 
                key={project.id} 
                className="relative h-120 w-full bg-white rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 w-full overflow-hidden rounded-lg"
                  variants={revealVariants}
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-120 bg-cover bg-center p-6 flex flex-col justify-end text-white"
                    style={{ 
                      backgroundImage: project.bg,
                      width: '100%' 
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30 z-0" />

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">View Case Study</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: UNTOUCHED SERVICES SECTIONS */}
      <section className='min-h-screen bg-white px-5 py-12 text-black md:px-10 '>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">What I can provide</h1>
        
        <motion.div 
          className='relative w-full rounded-lg overflow-hidden shadow-sm mb-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 right-0 w-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${SCBG1})` }}
            variants={bgRevealVariants}
          />

          <motion.div 
            className='relative z-10 p-6 flex flex-col md:flex-row justify-between items-stretch gap-12'
            variants={contentContainerVariants}
          >
            <div className="overflow-hidden flex items-start">
              <motion.h2 
                className='text-3xl font-semibold tracking-tight text-white py-1'
                variants={titleLeftVariants}
              >
                UI/UX Design
              </motion.h2>
            </div>

            <div className="flex-1 max-w-xl w-full flex flex-col justify-center">
              {UIUXservices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="overflow-hidden py-3">
                    <motion.div 
                      className='text-xl tracking-tight font-medium text-white'
                      variants={itemRightVariants}
                    >
                      {service}
                    </motion.div>
                  </div>
                  {index < UIUXservices.length - 1 && (
                    <hr className='border-white/50' />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className='relative w-full rounded-lg overflow-hidden shadow-sm mb-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 right-0 w-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${SCBG2})` }}
            variants={bgRevealVariants}
          />

          <motion.div 
            className='relative z-10 p-6 flex flex-col md:flex-row justify-between items-stretch gap-12'
            variants={contentContainerVariants}
          >
            <div className="overflow-hidden flex items-start">
              <motion.h2 
                className='text-3xl font-semibold tracking-tight text-white py-1'
                variants={titleLeftVariants}
              >
                Frontend Web Development
              </motion.h2>
            </div>

            <div className="flex-1 max-w-xl w-full flex flex-col justify-center">
              {FWDservices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="overflow-hidden py-3">
                    <motion.div 
                      className='text-xl tracking-tight font-medium text-white'
                      variants={itemRightVariants}
                    >
                      {service}
                    </motion.div>
                  </div>
                  {index < FWDservices.length - 1 && (
                    <hr className='border-white/50' />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className='relative w-full rounded-lg overflow-hidden shadow-sm mb-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 right-0 w-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${SCBG3})` }}
            variants={bgRevealVariants}
          />

          <motion.div 
            className='relative z-10 p-6 flex flex-col md:flex-row justify-between items-stretch gap-12'
            variants={contentContainerVariants}
          >
            <div className="overflow-hidden flex items-start">
              <motion.h2 
                className='text-3xl font-semibold tracking-tight text-white py-1'
                variants={titleLeftVariants}
              >
                Graphic Designing
              </motion.h2>
            </div>

            <div className="flex-1 max-w-xl w-full flex flex-col justify-center">
              {GDservices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="overflow-hidden py-3">
                    <motion.div 
                      className='text-xl tracking-tight font-medium text-white'
                      variants={itemRightVariants}
                    >
                      {service}
                    </motion.div>
                  </div>
                  {index < GDservices.length - 1 && (
                    <hr className='border-white/50' />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: UNTOUCHED SCROLL-EXPANDING MASK */}
      <section ref={expandSectionRef} className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div
            className='relative overflow-hidden bg-black flex items-center justify-center'
            style={{ 
              width: cardWidth,
              height: cardHeight,
              borderRadius: cardBorderRadius
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${code})` }}
            />
            
            <p className='relative z-10 text-white text-5xl font-semibold tracking-tight text-center px-6 select-none mix-blend-difference'>
              #WhereQualityMeetsCommitment
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: UNTOUCHED INTRO/ABOUT SECTIONS WITH SCROLL-HIGHLIGHT & LOCKING */}
      <section ref={aboutScrollRef} className="relative h-[250vh] bg-black">
        <div className="sticky top-0 h-screen w-full px-5 py-12 md:px-10 flex flex-col items-stretch justify-center overflow-hidden">
          <h1 className='absolute top-12 left-5 md:left-10 text-3xl font-semibold tracking-tighter text-white select-none'>
            Let me Introduce Myself
          </h1>

          <div className="overflow-hidden self-center mt-15">
            <motion.div 
              className="w-200 p-10 max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={aboutRevealVariants}
            >
              <motion.h2 
                className='text-3xl font-medium tracking-tighter mb-5 font-sans'
                style={{ color: text1Color }}
              >
                I am Santhoshkumar Muralidharan,
              </motion.h2>
              
              <motion.p 
                className='text-2xl leading-tight tracking-tighter font-light mb-6 font-sans'
                style={{ color: text2Color }}
              >
                As a third-year undergraduate student and passionate designer, I specialize in creating modern, visually engaging, and user-focused digital experiences. I enjoy transforming ideas into meaningful designs that not only look great but also communicate effectively and create lasting impressions. Every project I take on is driven by quality, attention to detail, and a strong commitment to delivering the best possible outcome.
              </motion.p>

              <motion.p 
                className='text-2xl leading-tight tracking-tighter font-light font-sans'
                style={{ color: text3Color }}
              >
                I believe great design is about more than aesthetics—it's about understanding goals, solving problems, and creating experiences that connect with people. While I continue to grow and refine my skills, I bring professionalism, creativity, and dedication to every project. My goal is simple: to help clients bring their vision to life through high-quality design and reliable collaboration.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODIFIED FINAL SECTION: TESTIMONIALS SLIDE-UP + ENDLESS SCROLL + SCROLL PAUSE & ZOOM HOVER */}
      <section className='min-h-screen bg-black px-5 py-12 md:px-10 overflow-hidden flex flex-col justify-center'>
         <h1 className="text-3xl font-semibold tracking-tighter text-white mb-15">What My Clients Says</h1>

         {/* Entry slide-up container matching your exact viewport mask pattern */}
         <motion.div 
           className="relative w-full overflow-hidden"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.15 }}
           variants={testimonialContainerVariants}
         >
           {/* Cleaned layout styles for marquee container tracking */}
           <style dangerouslySetInnerHTML={{__html: `
             @keyframes marquee {
               0% { transform: translate3d(0, 0, 0); }
               100% { transform: translate3d(-50%, 0, 0); }
             }
             .animate-marquee-infinite {
               display: flex;
               width: max-content;
               animation: marquee 45s linear infinite;
               will-change: transform;
               transform: translate3d(0, 0, 0);
             }
             .animate-marquee-infinite:hover {
               animation-play-state: paused;
             }
             .testimonial-card {
               contain: layout paint;
             }
             @keyframes testimonial-star-drift {
               0% {
                 background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
               }
               100% {
                 background-position: 72px -144px, -96px -192px, 118px -236px, -84px -168px, 132px -264px, 0 0;
               }
             }
             @keyframes testimonial-star-twinkle {
               0%, 100% { opacity: 0.22; transform: translate3d(0, 0, 0) scale(1); }
               50% { opacity: 0.68; transform: translate3d(10px, -14px, 0) scale(1.04); }
             }
             .testimonial-stars {
               background-image:
                 radial-gradient(circle at 14% 18%, rgba(255,255,255,0.95) 0 1px, transparent 1.4px),
                 radial-gradient(circle at 72% 22%, rgba(255,255,255,0.75) 0 1px, transparent 1.5px),
                 radial-gradient(circle at 42% 62%, rgba(255,255,255,0.8) 0 1px, transparent 1.5px),
                 radial-gradient(circle at 84% 74%, rgba(255,255,255,0.65) 0 1px, transparent 1.5px),
                 radial-gradient(circle at 26% 82%, rgba(255,255,255,0.7) 0 1px, transparent 1.5px),
                 radial-gradient(ellipse at bottom, #262626 0%, #000 72%);
               background-size: 72px 72px, 96px 96px, 118px 118px, 84px 84px, 132px 132px, 100% 100%;
               opacity: 0.95;
               animation: testimonial-star-drift 26s linear infinite;
               will-change: background-position;
             }
             .testimonial-stars::after {
               content: "";
               position: absolute;
               inset: 0;
               background-image:
                 radial-gradient(circle at 18% 28%, rgba(255,255,255,0.95) 0 1.5px, transparent 2px),
                 radial-gradient(circle at 58% 14%, rgba(255,255,255,0.8) 0 1px, transparent 1.7px),
                 radial-gradient(circle at 78% 58%, rgba(255,255,255,0.9) 0 1.4px, transparent 2px),
                 radial-gradient(circle at 35% 76%, rgba(255,255,255,0.75) 0 1px, transparent 1.8px);
               background-size: 160px 160px, 132px 132px, 190px 190px, 145px 145px;
               animation: testimonial-star-twinkle 4.8s ease-in-out infinite;
               pointer-events: none;
             }
           `}} />

           {/* Infinite Scroller Track Box */}
           <div className="animate-marquee-infinite flex gap-6 py-6 items-center">
             {[...testimonials, ...testimonials].map((item, index) =>
               renderTestimonialCard(item, `${index < testimonials.length ? 'first' : 'second'}-${item.id}`)
             )}
           </div>
         </motion.div>
      </section>
      
      <section className="w-full bg-[#f6f6f6] text-black px-5 py-10 md:px-10 overflow-hidden select-none">
      <div className="mx-auto max-w-5xl">

        {/* Main Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Large Typographic Header Statement */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter leading-[1.08] text-neutral-900">
              Have a structural vision? Let’s map out a execution strategy and{' '}
              <span className="relative inline-block font-serif italic text-neutral-800">
                build it together.
                <motion.span 
                  className="absolute bottom-1 left-0 h-[2px] bg-black/10 w-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </h2>
          </div>

          {/* Subtext Description Block */}
          <div className="lg:col-span-4 lg:mt-3">
            <p className="text-sm tracking-tighter text-neutral-500 leading-relaxed max-w-sm">
              Open to new projects in frontend development, UI/UX design, and graphic design. From responsive websites and digital products to brand visuals and marketing assets, I help transform ideas into polished and impactful experiences. 
            </p>
          </div>

        </div>

        {/* The Single Focal Navigation Button Layer */}
        <div className="mt-16 md:mt-24 w-full">
          <motion.a
            href="/contact" // Update this path to match your Routing structure (e.g., if using react-router-dom, change to a Link component)
            className="group relative flex w-full items-center justify-between rounded-full border border-black/10 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] overflow-hidden"
            whileHover="hover"
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Liquid Expansion Fill Hover Layer */}
            <motion.div 
              className="absolute inset-0 bg-neutral-950 z-0 rounded-full"
              initial={{ y: "101%" }}
              variants={{ hover: { y: 0 } }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            />

            {/* Interactive Inner Labels */}
            <span className="relative z-10 text-xl md:text-2xl font-medium tracking-tighter text-neutral-900 group-hover:text-white transition-colors duration-400 pl-2">
              Let's Start a Project
            </span>

            {/* Kinetic Arrow Container */}
            <div className="relative z-10 flex items-center gap-3 pr-2">
              <span className="hidden sm:inline text-xs font-mono tracking-wider text-neutral-400 group-hover:text-neutral-500 transition-colors duration-400">
                GO TO CONTACT
              </span>
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-50 border border-black/5 group-hover:border-white/10 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-400"
                variants={{ hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="h-5 w-5 text-neutral-600 group-hover:text-white transition-colors duration-400" />
              </motion.div>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
    </div>
  )
}

export default HomeBrief
