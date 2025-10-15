import { useState, useEffect } from 'react'

export function usePlayerControls() {
  const [keys, setKeys] = useState({ forward: false, backward: false, left: false, right: false })

  useEffect(() => {
    const downHandler = e => {
      switch (e.code) {
        case 'KeyW': setKeys(k => ({ ...k, forward: true })); break;
        case 'KeyS': setKeys(k => ({ ...k, backward: true })); break;
        case 'KeyA': setKeys(k => ({ ...k, left: true })); break;
        case 'KeyD': setKeys(k => ({ ...k, right: true })); break;
      }
    }
    const upHandler = e => {
      switch (e.code) {
        case 'KeyW': setKeys(k => ({ ...k, forward: false })); break;
        case 'KeyS': setKeys(k => ({ ...k, backward: false })); break;
        case 'KeyA': setKeys(k => ({ ...k, left: false })); break;
        case 'KeyD': setKeys(k => ({ ...k, right: false })); break;
      }
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return keys
}
