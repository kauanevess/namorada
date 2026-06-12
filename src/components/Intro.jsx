import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import s from './Intro.module.css'

export default function Intro() {
  return (
    <section className={s.wrap}>
      <motion.div className={s.inner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}>

        <p className={s.date}>12 de junho</p>

        <h1 className={s.title}>
          Como falar apenas<br />
          <em>feliz dia dos namorados</em><br />
          pra você —
        </h1>

        <p className={s.body}>
          acho que isso é tão pouco para o que você
          realmente é pra mim.
        </p>
      </motion.div>

      <motion.div className={s.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}>
        ↓
      </motion.div>
    </section>
  )
}
