import { Canvas } from '@react-three/fiber'
import BendImage from './BendImage'

export default function ScrollBendCanvas({ src, velocity }) {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 100, position: [0, 0, 10] }}
      style={{ width: '100%', height: '100%' }}
    >
      <BendImage src={src} velocity={velocity} />
    </Canvas>
  )
}
