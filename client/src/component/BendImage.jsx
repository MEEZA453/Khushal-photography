import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const BendMaterial = shaderMaterial(
  {
    uTexture: null,
    uVelocity: 0.0,
  },
  `
    varying vec2 vUv;
    uniform float uVelocity;

    void main() {
      vUv = uv;
      vec3 pos = position;

      float bendStrength = uVelocity * 0.1; // exaggerate the bend a bit
      pos.y += sin(pos.x * 3.14) * bendStrength;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main() {
      vec4 color = texture2D(uTexture, vUv);
      gl_FragColor = color;
    }
  `
)

extend({ BendMaterial })

export default function BendImage({ src, velocity }) {
  const ref = useRef()
  const texture = new THREE.TextureLoader().load(src)

  useFrame(() => {
    if (ref.current) {
      ref.current.uVelocity = velocity.get()
    }
  })

  return (
    <mesh>
      <planeGeometry args={[4, 3, 64, 64]} />
      <bendMaterial ref={ref} uTexture={texture} uVelocity={0} />
    </mesh>
  )
}
