import React, { useState, useEffect } from 'react'

export default function ImageBlock({ images, width, height }) {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.querySelectorAll('.image-block').forEach(block => block.querySelector('.image').classList.remove('image-hidden'))
  }, [])
  

  const change_photo = (event) => {
    const target = event.target
    const images_nodes = target.parentNode.childNodes
    if (Number(target.id) !== images.length - 1) {
      images_nodes[index].classList.add('image-hidden')
      images_nodes[index + 1].classList.remove('image-hidden')
      setIndex(prev => prev += 1)
    }
    else {
      images_nodes[index].classList.add('image-hidden')
      images_nodes[0].classList.remove('image-hidden')
      setIndex(0)
    }
  }

  return (
    <div className='image-block' onClick={change_photo} style={{width: width + 'px', height: height + 'px'}} >
      { images.map((image_url, index) => (
          <img key={index} src={image_url} alt='apartment' className='image image-hidden' id={index} width={width} />  
      ))}
    </div>
  )
}
