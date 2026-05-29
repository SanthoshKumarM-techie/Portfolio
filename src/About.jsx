import React from 'react'
import { Rotate3D } from 'lucide-react'
import ColorBends from './components/ColorBends'
import { StarsBackground } from './components/Stars'

const toolCards = [
  {
    title: 'Frontend Development',
    description:
      'Building fast, responsive, and interactive web experiences with modern frontend technologies and clean development practices',
    skills: ['HTML5', 'CSS3', 'Javascript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX & Design',
    description:
      'Designing intuitive and visually engaging interfaces focused on user experience, clarity, and usability.',
    skills: ['UX Research', 'UI Design', 'Wireframing', 'User-Centered Design'],
  },
  {
    title: 'Tools & Workflow',
    description:
      'Using modern development tools and streamlined workflows to ensure efficient collaboration, clean code management, and smooth deployment.',
    skills: ['Git & GitHub', 'VS Code', 'Netlify / Vercel'],
  },
]

const lifecycleSteps = [
  {
    id: 1,
    title: "Understanding Before Building",
    description: "Carefully analyzing project goals, business needs, and user expectations to create a clear development direction before starting the work.",
    // Business strategy / planning image
    bgImage: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1800&q=100"
  },
  {
    id: 2,
    title: "Researching with Purpose",
    description: "Exploring design trends, user behavior, and project requirements to plan a modern, effective, and goal-driven solution.",
    // Research / UX design trends image
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Structuring the User Experience",
    description: "Creating clean layouts and intuitive interface structures that improve usability, visual hierarchy, and overall user interaction.",
    // Wireframing / UI structure image
    bgImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1800&q=100"
  },
  {
    id: 4,
    title: "Developing Responsive Experiences",
    description: "Transforming designs into fast, responsive, and interactive websites using modern frontend technologies and clean code practices.",
    // Coding / Web development image
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=100"
  },
  {
    id: 5,
    title: "Refining for Performance & Quality",
    description: "Testing across devices and optimizing performance, responsiveness, accessibility, and smooth user experience for a polished final product.",
    // Code optimization / testing image
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=100"
  },
  {
    id: 6,
    title: "Launching with Confidence",
    description: "Finalizing, reviewing, and deploying the project with attention to quality, functionality, and seamless user experience.",
    // Rocket / Launch / Success celebration image
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=100"
  }
];

function ToolFlipCard({ card }) {
  return (
    <div className="group h-[500px] [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden bg-black [backface-visibility:hidden]">
          <StarsBackground className="absolute inset-0 z-0" pointerEvents={false} />
          <div className="relative z-10 p-6">
            <p className="mb-5 text-[1.5rem] font-medium tracking-tighter text-white">{card.title}</p>
            <p className="text-[1.3rem] tracking-tighter text-white/65">
              {card.description}
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-6 right-6 z-10 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white shadow-[0_0_35px_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-500 group-hover:scale-90 group-hover:opacity-0">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <span className="absolute inset-0 rounded-full border border-white/60 [animation:ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <Rotate3D className="relative h-5 w-5 [animation:spin_3s_linear_infinite]" strokeWidth={1.8} />
            </span>
            <span className="text-[0.85rem] font-medium uppercase tracking-[0.18em] text-white/85">
              Hover
            </span>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden bg-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <StarsBackground className="absolute inset-0 z-0" pointerEvents={false} />
          <div className="relative z-10 flex h-full flex-col gap-3 p-10">
            {card.skills.map(skill => (
              <p key={skill} className="text-[1.3rem] leading-tight tracking-tighter text-white">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div id="about" className="bg-black">
      <section className="relative min-h-screen w-full overflow-hidden bg-black px-10 py-10 text-white md:px-16 flex items-center">
        <div className="absolute inset-0 z-0">
          <ColorBends
            colors={["#2802FF", "#1A00B0", "#130080"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
          />
        </div>

        <div>
          <p className='text-[2rem] font-semibold text-[#FFDD00] tracking-tighter mb-5 mix-blend-difference'>#WhereQualityMeetsCommitment</p>
          <p className="text-[8vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter text-white mb-5 mix-blend-difference">SanthoshKumar MuraliDharan</p>
          <p className="text-[1.5rem] font-medium tracking-tighter text-white mb-5 mix-blend-difference">Frontend Developer . Specialized in Producing Quality Output</p>
          <p className='text-[1.3rem] tracking-tighter text-white w-100 mb-5 mix-blend-difference'>I design and develop responsive frontend experiences that help businesses build trust and convert visitors into customers.</p>
        </div>
      </section>

      <section className='relative min-h-screen w-full overflow-hidden bg-white px-10 py-10 text-white md:px-16'>
        <div className='grid justify-items-center mb-10'>
          <p className='text-[2rem] font-semibold text-black tracking-tighter mb-5'>The Person Behind the Pixels</p>
          <p className='text-[1.3rem] text-black/65 tracking-tighter text-center'>I started my journey with UI/UX design and gradually moved into frontend development to bring interfaces to life through clean code and smooth user experiences. I enjoy transforming ideas into responsive and interactive websites that are both visually appealing and performance optimized</p>
        </div>

        <div>
          <p className='text-[2rem] font-semibold text-black tracking-tighter mb-5 text-center'>Tools Behind the Build</p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {toolCards.map(card => (
              <ToolFlipCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-10 py-10 font-sans md:px-16">
        <h2 className="mb-5 text-center text-[2rem] font-semibold tracking-tighter text-black">
          How Your Project Comes to Life
        </h2>

        <div className="space-y-4">
          {lifecycleSteps.map((step) => (
            <div
              key={step.id}
              className="group relative flex min-h-[260px] w-full overflow-hidden bg-black p-4 shadow-sm transition-transform duration-300 hover:shadow-md md:aspect-[1628/340] md:min-h-0"
            >
              <img
                src={step.bgImage}
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <span className="absolute -right-2 -top-3 z-10 select-none text-[4.5rem] font-extrabold leading-none text-white mix-blend-difference md:text-[5.5rem]">
                {step.id}
              </span>

              <div className="relative z-20 flex h-full max-w-[88%] flex-col justify-between text-white mix-blend-difference md:max-w-[75%]">
                <h3 className="max-w-[18rem] font-medium leading-[0.95] tracking-tighter text-[1.5rem]">
                  {step.title}
                </h3>
                <p className="leading-tight tracking-tighter text-[1.3rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
