import Intro        from './components/Intro'
import PhotoSection from './components/PhotoSection'
import Gallery      from './components/Gallery'
import Final        from './components/Final'
import MusicBtn     from './components/MusicBtn'

import img1  from './assets/img1.png'   // casal, colher sorvete
import img2  from './assets/img2.png'   // bar, rindo juntos
import img3  from './assets/img3.png'   // espelho banheiro
import img4  from './assets/img4.png'   // mostrando aliança
import img5  from './assets/img5.png'   // ela sorrindo (melhor solo)
import img7  from './assets/img7.png'   // ela sorrindo 2
import img8  from './assets/img8.png'   // selfie juntos
import img9  from './assets/img9.png'   // landscape, casal noite
import img10 from './assets/img10.png'  // casal apoiado
import img11 from './assets/img11.png'  // casal fazendo bico
import img12 from './assets/img12.png'  // casal natureza

const SECTIONS = [
  {
    img: img5,
    label: 'o que eu admiro',
    text: 'Eu acho boba minha capacidade de falar tudo que eu admiro em você — é uma <em>lista muito grande</em> kkkkk.',
    flip: false,
  },
  {
    img: img2,
    label: 'o que eu amo',
    text: 'Posso falar como <em>amo seu sorriso</em>, amo seus <em>cabelos coloridos</em>, amo suas graças…',
    flip: true,
  },
  {
    img: img1,
    label: 'você por inteiro',
    text: 'e amo, amo, <em>amo você por completo</em>.',
    flip: false,
  },
  {
    img: img12,
    label: 'o que você me faz',
    text: 'Ter você na minha vida me faz ser um <em>homem melhor</em>, faz meus dias serem melhores.',
    flip: true,
  },
]

// Gallery: 11 photos, img9 (landscape) goes at index 8 so it spans 2 cols
const GALLERY = [img3, img4, img7, img8, img10, img11, img1, img2, img9, img12, img5]

export default function App() {
  return (
    <>
      <MusicBtn />
      <Intro />
      {SECTIONS.map((sec, i) => <PhotoSection key={i} {...sec} />)}
      <Gallery photos={GALLERY} />
      <Final />
    </>
  )
}
