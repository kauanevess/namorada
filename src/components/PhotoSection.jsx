import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import s from './PhotoSection.module.css'

// Each section: full-bleed photo on one side, short text on the other
export default function PhotoSection({ img, text, label, flip }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section ref={ref} className={`${s.wrap} ${flip ? s.flip : ''}`}>
      <motion.div className={s.photo}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [.25,.46,.45,.94] }}>
        <img src={img} alt="" />
      </motion.div>

      <motion.div className={s.text}
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .9, delay: .2, ease: [.25,.46,.45,.94] }}>
        <span className={s.label}>{label}</span>
        <p className={s.copy} dangerouslySetInnerHTML={{ __html: text }} />
      </motion.div>
    </section>
  )
}
