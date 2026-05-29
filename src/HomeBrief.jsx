import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import PixelBlast from './components/PixelBlast'
import Beams from './components/Beams'
import LogoLoop from './components/LogoLoop'

const tiltSpring = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

function ProjectCard({ project }) {
  const rotateX = useSpring(useMotionValue(0), tiltSpring)
  const rotateY = useSpring(useMotionValue(0), tiltSpring)
  const scale = useSpring(1, tiltSpring)

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    rotateX.set((offsetY / (rect.height / 2)) * -6)
    rotateY.set((offsetX / (rect.width / 2)) * 6)
  }

  function handleMouseEnter() {
    scale.set(1.025)
  }

  function handleMouseLeave() {
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <article
      className="group relative aspect-[4/3.05] [perspective:800px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden bg-white/10 [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, scale }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:opacity-100 [transform:translateZ(0)]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent [transform:translateZ(18px)]" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 [transform:translateZ(32px)]">
          <h3 className="max-w-[16rem] text-[1.5rem] font-medium leading-[0.98] tracking-tighter text-white">
            {project.title}
          </h3>

        </div>
      </motion.div>
    </article>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="group relative flex h-[360px] w-[360px] flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700 hover:bg-zinc-900/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        <div className="mb-6 flex items-center gap-4">
          {item.avatarUrl ? (
            <img
              src={item.avatarUrl}
              alt={item.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-800 transition-all duration-300 group-hover:ring-zinc-700"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600/30 bg-gradient-to-br from-zinc-700 to-zinc-800 text-base font-semibold uppercase tracking-wide text-zinc-200">
              {item.name.slice(0, 2)}
            </div>
          )}

          <div className="flex flex-col">
            <h3 className="text-[1.5rem] font-medium leading-tight tracking-tighter text-white">
              {item.name}
            </h3>
            <p className="mt-0.5 text-[1.3rem] leading-[1.05] tracking-tighter text-white/70">
              {item.role}
            </p>
          </div>
        </div>

        <div className="mb-5 flex gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 fill-current text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <p className="text-[1.3rem] leading-[1.05] tracking-tighter text-white">
          "{item.content}"
        </p>
      </div>
    </div>
  )
}

function HomeBrief() {
  const projects = [
    {
      id: 1,
      title: 'Crypto Mobile Wallet',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      title: 'Minimalist E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 4,
      title: 'AI Copywriting Assistant UI',
      image: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 5,
      title: 'Neo-Brutalist Branding System',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 6,
      title: 'Spatial Computing Interface',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Santhoshkumar",
      role: "founder",
      avatarUrl: "", // Add image path if available, defaults to initials placeholder
      rating: 5,
      content: "Santhosh has delivered the project on the time and i love the way he communicate with and done the work with very super way and amazing work"
    },
    {
      id: 2,
      name: "Santhoshkumar",
      role: "founder",
      avatarUrl: "",
      rating: 5,
      content: "Santhosh has delivered the project on the time and i love the way he communicate with and done the work with very super way and amazing work"
    },
    {
      id: 3,
      name: "Santhoshkumar",
      role: "founder",
      avatarUrl: "",
      rating: 5,
      content: "Santhosh has delivered the project on the time and i love the way he communicate with and done the work with very super way and amazing work"
    },
  {
      id: 3,
      name: "Santhoshkumar",
      role: "founder",
      avatarUrl: "",
      rating: 5,
      content: "Santhosh has delivered the project on the time and i love the way he communicate with and done the work with very super way and amazing work"
    },
  {
      id: 3,
      name: "Santhoshkumar",
      role: "founder",
      avatarUrl: "",
      rating: 5,
      content: "Santhosh has delivered the project on the time and i love the way he communicate with and done the work with very super way and amazing work"
    }]


  return (
    <div>
    <section id="work" className="min-h-screen w-full bg-white px-10 py-10 pt-15 font-sans text-black selection:bg-white/20 md:px-16">

      <div className="mb-[8vh] grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <h2 className="font-semibold leading-[0.8] tracking-tighter text-black text-[2rem]">
            What I have
            done for Clients
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-[5vh] flex items-center justify-end gap-2 text-[1.3rem] font-normal tracking-tighter text-black">
        <p>View More</p>
      </div>
    </section>

    <section id="services" className="min-h-screen w-full bg-white px-10 py-10 font-sans text-black selection:bg-white/20 md:px-16">
        <div className="mb-[8vh] grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <h2 className="font-semibold leading-[0.8] tracking-tighter text-black text-[2rem]">
            What can I Provide
          </h2>
        </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1: Frontend Web Development */}
          <div className='relative overflow-hidden bg-black text-white'>
  <div className="absolute inset-0 z-0 opacity-70">
    <PixelBlast
      variant="square"
      pixelSize={4}
      color="#B497CF"
      patternScale={2}
      patternDensity={1}
      pixelSizeJitter={0}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.5}
      liquid={false}
      liquidStrength={0.12}
      liquidRadius={1.2}
      liquidWobbleSpeed={5}
      speed={0.5}
      edgeFade={0.25}
      transparent
    />
  </div>
  <div className="absolute inset-0 z-[1] bg-black/65" />

  <div className='relative z-10 p-6'>
    <h1 className='font-medium text-[1.5rem] tracking-tighter mb-7'>Frontend Web Development</h1>
    <p className='tracking-tighter text-white/80 mb-7 text-[1.3rem] leading-0.8'>
      Building responsive and visually engaging websites with modern frontend technologies and user-centered design.
    </p>
  </div>
  
  {/* Modern & Creative Interactive UI Mockup Canvas */}
{/* The background container - Utilizes full 450px height with immersive content */}
<div className="relative z-10 h-[450px] w-full flex items-center justify-center bg-transparent relative overflow-hidden group p-6 select-none pointer-events-none">
  
  {/* Modern Technical Grid Background Layer */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

  {/* Vibrant Ambient Glow Effects */}
  <div className="absolute top-12 left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-110" />
  <div className="absolute bottom-12 right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-purple-500/20 group-hover:scale-110" />

  {/* Inner Filling Content Wrapper */}
  <div className="relative w-full h-full max-w-xl flex items-center justify-center">
    
    {/* 1. Code Editor Glass Panel (Fills Left/Center background) */}
    <div className="absolute left-0 top-8 w-[65%] h-[75%] bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-2xl transition-all duration-500 ease-out group-hover:border-white/10 group-hover:bg-neutral-900/60 group-hover:-translate-y-2 group-hover:-translate-x-2">
      {/* Window Header */}
      <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-3">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/70 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 group-hover:bg-green-500/70 transition-colors" />
        </div>
        <div className="text-[10px] font-mono text-white/20 tracking-wider group-hover:text-white/40 transition-colors">App.tsx</div>
      </div>
      
      {/* Code Blocks mimicking full layout */}
      <div className="space-y-3 font-mono text-[11px] leading-relaxed">
        <div className="flex items-center gap-2">
          <span className="text-purple-400/70">import</span>
          <span className="text-blue-400/80">React,</span>
          <span className="text-blue-400/40">{"{ useState }"}</span>
          <span className="text-purple-400/70">from</span>
          <span className="text-green-400/60">'react'</span>
        </div>
        <div className="h-[1px] w-full bg-white/5" />
        <div className="space-y-2 pl-2">
          <div className="h-3.5 w-32 bg-white/5 rounded-md" />
          <div className="flex items-center gap-1.5">
            <span className="text-purple-400/70">return</span>
            <span className="text-amber-400/60">(</span>
          </div>
          <div className="space-y-1.5 pl-4 border-l border-white/5">
            <div className="h-3.5 w-44 bg-blue-500/10 border border-blue-500/10 rounded-md" />
            <div className="h-3.5 w-28 bg-white/5 rounded-md" />
            <div className="h-3.5 w-36 bg-purple-500/10 border border-purple-500/10 rounded-md" />
          </div>
        </div>
      </div>
    </div>

    {/* 2. Live UI Web Preview Card (Fills Right/Foreground) */}
    <div className="absolute right-0 bottom-8 w-[55%] h-[65%] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out group-hover:border-purple-500/30 group-hover:translate-y-[-12px] group-hover:translate-x-4 group-hover:shadow-purple-500/5">
      {/* Component Header Browser Simulation */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-purple-500/20">
          ✨
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="h-2.5 w-20 bg-white/80 rounded-full" />
          <div className="h-1.5 w-12 bg-white/30 rounded-full" />
        </div>
        <div className="h-5 w-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[9px] font-mono text-white/40">
          v2.0
        </div>
      </div>
      
      {/* Dynamic Content Frame */}
      <div className="h-[calc(100%-44px)] rounded-xl bg-white/[0.01] border border-white/5 p-3 flex flex-col justify-between">
        {/* Mock Graphical Data/Hero Area */}
        <div className="relative w-full h-20 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5 overflow-hidden flex items-center justify-center">
          {/* Animated decorative grid lines inside the preview component */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="h-6 w-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-white/60 font-medium tracking-wide">Live Preview</span>
          </div>
        </div>

        {/* Bottom Interactive Row Simulation */}
        <div className="flex justify-between items-center pt-2">
          <div className="space-y-1">
            <div className="h-2 w-16 bg-white/40 rounded-full" />
            <div className="h-1.5 w-8 bg-white/20 rounded-full" />
          </div>
          {/* Mock Interactive Switch Switcher */}
          <div className="h-4.5 w-8 rounded-full bg-neutral-800 p-0.5 flex justify-start group-hover:justify-end transition-all duration-300 ease-out border border-white/5">
            <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-md shadow-purple-500/50" />
          </div>
        </div>
      </div>
    </div>

    {/* 3. Floating Micro-Tech Badges for Depth */}
    <div className="absolute top-16 right-8 bg-neutral-900/60 border border-white/5 text-[10px] font-mono text-blue-400/60 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:text-blue-400 group-hover:border-blue-500/20">
      {"<Flex />"}
    </div>
    <div className="absolute bottom-16 left-6 bg-neutral-900/60 border border-white/5 text-[10px] font-mono text-purple-400/60 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-md transition-all duration-500 group-hover:translate-y-2 group-hover:text-purple-400 group-hover:border-purple-500/20">
      {"gap-4"}
    </div>
    
  </div>
</div>
</div>
        </div>

        <div>
          <p className="mt-[5vh] flex items-center justify-end gap-2 text-[1.3rem] font-normal tracking-tighter text-black">let's work Together</p>
        </div>
    </section>

    <section id="contact" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black px-10 py-10 font-sans text-white selection:bg-white/20 md:px-16">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/45" />

      <div className="relative z-10 grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <h2 className="font-semibold leading-[0.8] tracking-tighter text-white text-[2rem]">
            What my clients say
          </h2>
        </div>
        </div>
        <div className="relative z-10 -mx-10 flex flex-1 items-center md:-mx-16">
          <LogoLoop
            logos={testimonials}
            speed={70}
            direction="left"
            gap={24}
            logoHeight={360}
            pauseOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Client testimonials"
            className="w-full"
            renderItem={(item) => <TestimonialCard item={item} />}
          />
        </div>
      
    </section>
    </div>
  )
}

export default HomeBrief
