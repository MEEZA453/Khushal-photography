import { useScroll, useSpring, useVelocity } from 'framer-motion'
import ScrollBendCanvas from './ScrollBendCanvas'

export default function BendOnScroll({ src }) {
  const { scrollY } = useScroll()

  // detect scroll velocity (how fast user scrolls)
  const velocity = useVelocity(scrollY)

  // smooth it out so it's not jerky
  const smoothVelocity = useSpring(velocity, {
    damping: 30,
    stiffness: 300,
    mass: 0.2,
  })

  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <ScrollBendCanvas src={src} velocity={smoothVelocity} />
    </div>
  )
}
