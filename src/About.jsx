import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import ColorBends from './components/ColorBends'
import Silk from './components/Silk'
import { StarsBackground } from './components/Stars'
import darkThemeImage from './assets/Dark theme image.jpg'

const lifecycleSteps = [
  {
    id: 1,
    title: "Understanding Before Building",
    description: "Every successful project starts with a clear understanding of the goals and requirements. I take time to analyze the client’s vision, target audience, business needs, and project expectations before writing a single line of code. This helps create a strong foundation and ensures the final product aligns perfectly with the intended purpose.",
  },
  {
    id: 2,
    title: "Researching with Purpose",
    description: "Before moving into design and development, I conduct research to understand modern design trends, user expectations, competitor approaches, and the best technical solutions for the project. This process helps in making informed decisions that improve both the visual appeal and functionality of the website.",
  },
  {
    id: 3,
    title: "Structuring the User Experience",
    description: "A well-structured interface creates a better user experience. I focus on organizing layouts, content flow, spacing, and navigation in a way that feels intuitive and engaging. The goal is to create clean, user-friendly interfaces that not only look modern but also improve usability and interaction.",
  },
  {
    id: 4,
    title: "Developing Responsive Experiences",
    description: "Using modern frontend technologies, I transform designs into fully responsive and interactive web experiences. I focus on writing clean, maintainable code while ensuring the website works smoothly across desktops, tablets, and mobile devices with consistent performance and visual quality.",
  },
  {
    id: 5,
    title: "Refining for Performance & Quality",
    description: "Quality goes beyond appearance. I carefully test the project across different screen sizes and browsers while optimizing performance, responsiveness, accessibility, and smooth interactions. This process helps deliver a polished, reliable, and professional final product.",
  },
  {
    id: 6,
    title: "Launching with Confidence",
    description: "Before deployment, I perform final reviews and refinements to ensure everything functions as expected. From responsiveness to overall user experience, every detail is checked carefully so the website is ready for a smooth and confident launch.",
  }
];

const silkCards = [
  {
    title: "Modern & User-Focused Interfaces",
    description: "I combine clean design principles with intuitive user experiences to create interfaces that are visually appealing, easy to navigate, and aligned with modern web standards.",
    rotation: 0,
  },
  {
    title: "Commitment to Quality",
    description: "I prioritize quality in every stage of development, delivering solutions that are reliable, professional, and built to meet project goals effectively.",
    rotation: 5,
    alignEnd: true,
  },
  {
    title: "Reliable Delivery",
    description: "Meeting deadlines is a key part of my work ethic. I manage projects efficiently to ensure timely delivery without compromising quality.",
    rotation: 5,
  },
  {
    title: "Focused on Long-Term Value",
    description: "My goal is not just to build a website but to create a digital experience that supports your business objectives and provides lasting value.",
    rotation: 0,
    alignEnd: true,
  },
]

function SilkValueCard({ card }) {
  return (
    <div className={`relative h-[350px] overflow-hidden bg-black p-6 ${card.alignEnd ? 'flex flex-col justify-end' : ''}`}>
      <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1}
          color="#5227FF"
          noiseIntensity={0}
          rotation={card.rotation}
        />
      </div>
      <p className="relative z-10 mb-5 max-w-[25rem] text-[3rem] font-bold leading-[0.9] tracking-tighter text-white mix-blend-difference">
        {card.title}
      </p>
      <p className="relative z-10 text-[1.3rem] leading-[0.9] tracking-tighter text-white mix-blend-difference">
        {card.description}
      </p>
    </div>
  )
}

function About() {
  const processSectionRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [processProgress, setProcessProgress] = useState(0);
  const [viewportSize, setViewportSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const clamp = (value) => Math.min(Math.max(value, 0), 1);

    const updateScrollState = () => {
      const scaleSection = document.getElementById('zoom-container-section');
      const processSection = processSectionRef.current;

      if (processSection) {
        const rect = processSection.getBoundingClientRect();
        const totalScrollableDistance = processSection.offsetHeight - window.innerHeight;
        
        if (rect.top <= 0) {
          const progress = totalScrollableDistance > 0 ? clamp(-rect.top / totalScrollableDistance) : 0;
          setProcessProgress(progress);
        } else {
          setProcessProgress(0);
        }
      }

      if (!scaleSection) return;

      const rect = scaleSection.getBoundingClientRect();
      const totalScrollableDistance = scaleSection.offsetHeight - window.innerHeight;

      if (-rect.top >= 0 && totalScrollableDistance > 0) {
        const progress = clamp(-rect.top / totalScrollableDistance);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      }
    };

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        updateScrollState();
      });
    };

    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
      updateScrollState();
    };

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentWidth = 500 + (viewportSize.width - 500) * scrollProgress;
  const currentHeight = 500 + (viewportSize.height - 500) * scrollProgress;
  const stepCount = lifecycleSteps.length;
  const processTrackHeight = `${stepCount * 120}vh`;

  return (
    <div id="about" className="bg-black">
      {/* SECTION 1: HERO */}
      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black px-10 py-10 text-white md:px-16 sticky top-0">
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
          <p className="text-[8vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter text-white mb-5 mix-blend-difference">SanthoshKumar MuraliDharan</p>
          <p className="text-[1.5rem] font-medium tracking-tighter text-white mb-5 mix-blend-difference">Frontend Developer . Specialized in Producing Quality Output</p>
          <p className='text-[1.3rem] tracking-tighter text-white w-100 mb-5 mix-blend-difference'>I design and develop responsive frontend experiences that help businesses build trust and convert visitors into customers.</p>
        </div>
      </section>

      {/* SECTION 2: PROCESS TIMELINE */}
      <section className='relative w-full bg-white text-white z-10'>
        <div className='px-10 pt-20 pb-10 md:px-16'>
          <div className='grid justify-items-center mb-10'>
            <p className='text-[2rem] font-semibold text-black tracking-tighter mb-5'>The Person Behind the Pixels</p>
            <p className='max-w-[55rem] text-[1.3rem] text-black/65 tracking-tighter text-center'>I started my journey with UI/UX design and gradually moved into frontend development to bring interfaces to life through clean code and smooth user experiences. I enjoy transforming ideas into responsive and interactive websites that are both visually appealing and performance optimized</p>
          </div>

          <p className='text-[2rem] font-semibold text-black tracking-tighter mb-5 text-center mt-20'>How Your Project Comes to Life</p>
          <p className='mx-auto max-w-[50rem] text-[1.3rem] text-black/65 tracking-tighter text-center'>
            Every project follows a structured and detail-focused process designed to transform ideas into modern, responsive, and high-quality web experiences. From understanding requirements to final deployment, each step is carefully planned to ensure clarity, performance, and a seamless user experience.
          </p>
        </div>

        <div
          ref={processSectionRef}
          className="relative w-full"
          style={{ height: processTrackHeight }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-white flex items-center">
            <div className="absolute left-6 top-1/2 z-20 hidden h-[60vh] -translate-y-1/2 md:left-12 lg:left-16 md:block">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/15" />
              <div
                className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-[#ffd400] transition-[height] duration-75 ease-out"
                style={{ height: `${processProgress * 100}%` }}
              />

              {lifecycleSteps.map((step, index) => {
                const dotProgress = stepCount === 1 ? 1 : index / (stepCount - 1);
                const isComplete = processProgress >= (dotProgress - 0.02);

                return (
                  <div
                    key={step.id}
                    className={`absolute left-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all duration-300 ${isComplete ? 'bg-[#ffd400] border-[#ffd400]' : 'bg-white border-black/40'}`}
                    style={{ top: `${dotProgress * 100}%` }}
                  >
                    {isComplete ? (
                      <Check className="h-4 w-4 text-black" strokeWidth={3} />
                    ) : (
                      <span className="text-[0.75rem] font-bold text-black/60">{step.id}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="w-full h-full relative">
              {lifecycleSteps.map((step, index) => {
                const isReversed = index % 2 === 1;
                
                const stepRange = 1 / stepCount;
                const stepStart = index * stepRange;
                const stepEnd = stepStart + stepRange;
                
                let opacity = 0;
                let transformY = 'translateY(40px)';
                
                if (processProgress >= stepStart && processProgress <= stepEnd) {
                  opacity = 1;
                  transformY = 'translateY(0px)';
                } else if (processProgress > stepEnd && index < stepCount - 1) {
                  opacity = 0;
                  transformY = 'translateY(-40px)';
                }

                return (
                  <div
                    key={step.id}
                    className="absolute inset-0 flex h-full w-full items-center px-10 md:pl-32 lg:pl-40 pr-10 transition-all duration-500 ease-out pointer-events-none"
                    style={{ 
                      opacity: opacity,
                      transform: transformY,
                      pointerEvents: opacity > 0 ? 'auto' : 'none'
                    }}
                  >
                    <div className={`grid w-full items-center gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 ${isReversed ? 'lg:grid-cols-[minmax(0,1fr)_340px]' : ''}`}>
                      
                      <div className={`relative flex h-[300px] w-full max-w-[340px] overflow-hidden bg-black text-white md:h-[340px] ${isReversed ? 'lg:order-2 lg:justify-self-end' : ''}`}>
                        <StarsBackground className="absolute inset-0 z-0" pointerEvents={false} />
                        <span className="absolute -right-1 -top-2 z-10 select-none text-[4.5rem] font-extrabold leading-none text-white mix-blend-difference md:text-[5.5rem]">{step.id}</span>
                        <p className='relative z-10 place-self-end p-4 text-[2.2rem] font-semibold leading-[0.95] tracking-tighter mix-blend-difference md:text-[2.5rem]'>{step.title}</p>
                      </div>

                      <p className={`max-w-[52rem] text-[1.3rem] leading-relaxed tracking-tighter text-black/65 ${isReversed ? 'lg:order-1 lg:justify-self-end lg:text-right' : ''}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CRITICAL TRANSITION TRACK */}
      <section 
        id="zoom-container-section" 
        className="relative h-[250vh] bg-white z-20"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <div 
            style={{
              width: `${currentWidth}px`,
              height: `${currentHeight}px`,
              borderRadius: '0px'
            }}
            className="bg-black flex items-center justify-center text-white relative overflow-hidden transition-all duration-75 ease-out"
          >
            <img
              src={darkThemeImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <p className='relative z-10 text-[2rem] font-bold tracking-tighter text-center px-6 whitespace-nowrap mix-blend-difference'>
              #WhereQualityMeetsCommitment
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WORK WITH ME */}
      <section className='relative min-h-screen w-full overflow-hidden bg-black px-10 pb-10 pt-30 text-white md:px-16 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]'>
        <div className="mb-20 grid justify-items-center">
          <p className='mb-5 text-center text-[2rem] font-semibold tracking-tighter text-white'>Why Work With Me?</p>
          <p className='max-w-[50rem] text-center text-[1.3rem] tracking-tighter text-white/65'>
            I believe successful projects are built on quality, communication, and attention to detail. By combining modern development practices with a client-focused approach, I deliver web experiences that are responsive, reliable, and designed to create real impact. Every project receives the same level of dedication, commitment, and focus on excellence from start to finish.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          {silkCards.map((card) => (
            <SilkValueCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
