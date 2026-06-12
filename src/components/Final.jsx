import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import s from './Final.module.css'

// One photo, the best one of her — fills the left side.
// Right side is a love letter: handwritten feeling, not a "happy valentines day" banner.
import hero from '../assets/img5.png'

export default function Final() {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-60px' })

  const lines = [
    { delay: 0,   text: 'não tem como negar' },
    { delay: .18, text: 'que eu te amo demais.' },
  ]

  return (
    <section ref={ref} className={s.wrap}>

      {/* left: photo, nearly full height */}
      <motion.div className={s.photoWrap}
        initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}>
        <img src={hero} alt="" className={s.photo} />
        {/* thin color wash so text on right doesn't fight it */}
        <div className={s.photoFade} />
      </motion.div>

      {/* right: the letter */}
      <div className={s.letter}>

        <motion.p className={s.prelude}
          initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: .8, delay: .3 }}>
          feliz dia dos namorados —
        </motion.p>

        <div className={s.bigWords}>
          {lines.map((l, i) => (
            <div key={i} className={s.lineWrap} style={{ overflow: 'hidden' }}>
              <motion.p className={s.bigLine}
                initial={{ y: '110%' }}
                animate={visible ? { y: '0%' } : {}}
                transition={{ duration: .85, delay: .5 + l.delay, ease: [.22, 1, .36, 1] }}>
                {l.text}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div className={s.divider}
          initial={{ scaleX: 0 }}
          animate={visible ? { scaleX: 1 } : {}}
          transition={{ duration: .9, delay: 1.1, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.p className={s.closing}
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .8, delay: 1.4 }}>
          ter você é a melhor parte dos meus dias.<br />
          e eu quero todos os que ainda vêm por aí.
        </motion.p>

        <motion.p className={s.sig}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: .8, delay: 1.9 }}>
          com amor ❤
        </motion.p>
      </div>
    </section>
  )
}
