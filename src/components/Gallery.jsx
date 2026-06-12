import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import s from './Gallery.module.css'

export default function Gallery({ photos }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState(null)

  return (
    <section ref={ref} className={s.wrap}>
      <motion.p className={s.caption}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: .8 }}>
        cada momento com você é favorito.
      </motion.p>

      {/* masonry: 4 cols, photos at natural ratios via padding trick */}
      <div className={s.grid}>
        {photos.map((src, i) => (
          <motion.div key={i}
            className={`${s.cell} ${s['c' + i]}`}
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: .7, delay: i * .06 }}
            onClick={() => setOpen(src)}>
            <img src={src} alt="" loading="lazy" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className={s.lb}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            onClick={() => setOpen(null)}>
            <motion.img src={open} alt=""
              initial={{ scale: .94 }} animate={{ scale: 1 }} exit={{ scale: .94 }}
              transition={{ duration: .3, ease: [.25,.46,.45,.94] }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
