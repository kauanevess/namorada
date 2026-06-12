import { useEffect, useRef, useState } from 'react'
import music from '../assets/mp3.mp3'
import s from './MusicBtn.module.css'

export default function MusicBtn() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    ref.current = new Audio(music)
    ref.current.loop = true
    return () => ref.current?.pause()
  }, [])

  const toggle = () => {
    if (playing) ref.current.pause()
    else ref.current.play()
    setPlaying(p => !p)
  }

  return (
    <button className={s.btn} onClick={toggle} aria-label="música">
      <span className={`${s.bars} ${playing ? s.active : ''}`}>
        {[0,1,2].map(i => <span key={i} className={s.bar} style={{ animationDelay: `${i * 0.15}s` }} />)}
      </span>
      <span className={s.label}>{playing ? 'pausar' : 'música'}</span>
    </button>
  )
}
