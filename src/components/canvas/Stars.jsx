import { useState, useRef, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from "maath/random/dist/maath-random.esm";


import {FaEnvelope, FaAddressBook , FaGithub, FaLinkedin} from 'react-icons/fa'; 


const Stars= (props) => {
    const ref = useRef();

    const sphere = random.inSphere(new Float32Array (5000), { radius:1.2})

    useFrame((state,delta) => {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    })

    return(
      <group rotation={[0,0,Math.PI/4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          />
        </Points>
        
      </group>

      
    )
}

const StarsCanvas = () => {
  return(
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0,0,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
       <div className='social-icons'>
        <a href='https://www.linkedin.com/in/isharaj24/' className='beatFade'><FaLinkedin  /></a>
        <a href='https://github.com/iishaa' className='beatFade'><FaGithub/></a>
        <a href='mailto:isharaj948@gmail.com' className='beatFade'><FaEnvelope/></a>
        <a href='https://drive.google.com/file/d/14rUdC1sMfoNyZ5GAP5NLzQS0H3-5APXp/view?usp=sharing' className='beatFade'><FaAddressBook/></a>
      </div>
    </div>
  )
}

export default StarsCanvas;