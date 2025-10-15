import { Environment, Sky } from '@react-three/drei'
import Player from '../components/Player'

export default function GameScene() {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />

      <Player />

      <Environment preset="sunset" />
    </>
  )
}
