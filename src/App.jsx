import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import GameScene from './scenes/GameScene'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
      <Suspense fallback={null}>
        <GameScene />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
