import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Player(props) {
  const ref = useRef()
  const { scene } = useGLTF('/models/spaceship.glb')

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5
  })

  return <primitive ref={ref} object={scene} scale={0.8} {...props} />
}

// Preload the model for faster load time
useGLTF.preload('/models/spaceship.glb')
