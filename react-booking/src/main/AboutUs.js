import React from 'react'
import lower from '../images/lower.jpeg'
import high from '../images/high.jpeg'
import don from '../images/don.jpeg'
import vrangel from '../images/vrangel.jpeg'
import garden from '../images/garden.jpeg'


export default function AboutUs() {

  const images = [
    ['Нижнее озеро', lower], 
    ['Верхнее озеро', high], 
    ['Башня Дона, музей Янтаря', don], 
    ['Башня Врангеля', vrangel], 
    ['Ботанический сад', garden]
  ]

  const style = [{marginRight: '20px'}, {order: 2, marginLeft: 'auto'}]

  return (
    <div className='about-us'>
      <p>
        Что это? я падаю! у меня ноги подкашиваются» , — подумал он и упал на спину. Он раскрыл глаза, надеясь увидать, чем 
        кончилась борьба французов с артиллеристами, и желая знать, убит или нет рыжий артиллерист, взяты или спасены пушки. Но 
        он ничего не видал. Над ним не было ничего уже, кроме неба, — высокого неба, не ясного, но все-таки неизмеримо высокого, 
        с тихо ползущими по нем серыми облаками.
      </p>
      { images.map((image, key) => (
        <div key={key} className='image-text'>
          <img src={image[1]} title={image[0]} style={style[key % 2]} />
          <p>Что это? я падаю! у меня ноги подкашиваются» , — подумал он и упал на спину. Он раскрыл глаза, надеясь увидать, 
          чем кончилась борьба французов с артиллеристами, и желая знать, убит или нет рыжий артиллерист, взяты или спасены 
          пушки.</p>
        </div>
      )) }
    </div>
  )
}
