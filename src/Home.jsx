import React from 'react'
import Silk from './components/Silk'

function Home() {
  return (
    <div id="home" className="min-h-screen px-5 py-12 text-white md:px-10 flex items-center">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#5227FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10">
        <h1 className="text-7xl font-bold tracking-tighter leading-tighter mb-5">Hey There, I am<br/>Santhoshkumar Muralidharan</h1>
        <p className="text-3xl font-semibold tracking-tighter mb-5">Frontend Developer</p>
        <p className="text-lg leading-tighter tracking-tighter w-200">Passionate about crafting modern digital experiences, I combine clean code, thoughtful design, and technical precision to build exceptional websites. With an unwavering commitment to quality and continuous improvement, I create fast, responsive, and user-focused solutions that help brands stand out in the digital world.</p>
      </div>
    </div>
  )
}

export default Home
