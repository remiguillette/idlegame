import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { Box3, Vector3 } from 'three'

const MODEL_PATH = '/models/barn_reception.glb'
const TARGET_SIZE = 6

export default function Player(props) {
  const { scene } = useGLTF(MODEL_PATH)

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  const { scale, offset } = useMemo(() => {
    const box = new Box3().setFromObject(scene)
    const size = box.getSize(new Vector3())
    const center = box.getCenter(new Vector3())
    const maxAxis = Math.max(size.x, size.y, size.z)
    const targetScale = maxAxis ? TARGET_SIZE / maxAxis : 1
    const adjustedOffset = new Vector3(
      -center.x,
      -center.y + size.y / 2,
      -center.z
    ).multiplyScalar(targetScale)

    return { scale: targetScale, offset: adjustedOffset.toArray() }
  }, [scene])

  return (
    <group {...props}>
      <group scale={scale} position={offset}>
        <primitive object={scene} />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_PATH)
