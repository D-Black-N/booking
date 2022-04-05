import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApartmentCard from './card/ApartmentCard';

export default function Apartments() {
  
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    const reader = new FileReader();
    let info = 'Апартаменты площадью 47м2, имеется гостиная-кухня, изолированная спальня, санузел с душевой кабиной. Максимальное количество гостей – 4 человека.\n\
    Расположение спальных мест\n\
- Гостиная-кухня – 1 раскладывающийся диван с полноценным матрасом 140см х 200см;\n\
- Спальня – кровать с ортопедическим матрасом размером King-size, 180см х 200см.\n\
    Удобства в квартире\n\
   Апартаменты полностью оснащены всем необходимым для комфортного отдыха и проживания. Полы с подогревом, двухконтурный газовый котел, натуральный паркетный пол. Экоремонт из натуральных отделочных материалов. Высокоскоростной WiFi, бесплатный для наших гостей. \n\
	Гостиная-кухня: кухня, холодильник, индукционная плита, духовка, кофемашина, стол со стульями, телевизор, раскладной двуспальный диван, посуда, панорамное остекление, сушилка для белья, моющие средства, чай, кофе, бутылочка воды – комплимент от хозяев, мини-бар (платно).\n\
	Спальня: кровать размером King-size, комод для белья, прикроватные тумбочки, туалетный столик с зеркалом, пуф, стул, телевизор.\n\
	Ванная: душевая кабина, раковина, туалет, стиральная машина, фен, шампунь, гель для душа, мыло, туалетная бумага.\n\
	Прихожая: вместительный шкаф-купе, зеркало, пуф, утюг, гладильная доска.\n\
Хлопковое постельное белье, полотенца и тапочки предоставляются всем гостям бесплатно.\n\
    Парковка бесплатная, на огороженной территории дома.\n\
    Детская и спортивная площадка на огороженной территории дома.\n\
    Порядок заселения/выселения\n\
Стандартное время заселения 14-00 (местное время)\n\
Стандартное время выселения 12-00 (местное время)\n\
Возможность более раннего заселения и более позднего отъезда – по ПРЕДВАРИТЕЛЬНОЙ ДОГОВОРЕННОСТИ.\n\
    Трансфер по запросу, оплачивается дополнительно.\n\
'

    setApartments([
      { 
        id: 1,
        name: 'Park Apartment',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Москва, ул. Тверской бульвар, д. 7',
        short_note: 'Прекрасные апартаменты в центре Москвы с красивым видом',
        full_note: ' Мы рады встретить наших гостей в новых, роскошных Апартаментах Park apartments, в живописном и зеленом районе Верхнего озера Калининграда! Исторический район Марауненхоф старого Кенигсберга…(веточка) Великолепный вид из панорамных окон верхнего этажа на парковую зону, огороженная территория, лифт, парковка, WiFi. Квартира расположена в 3 минутах ходьбы от парка Юность и в 5 минутах до набережной красивейшего Верхнего озера с велодорожками, спортивными и детскими площадками. 15 минут – и вы у исторического памятника Башня Врангеля (1853г.) на пешеходной улице Профессора Баранова, площади Победы, в Музее янтаря, у Собора Христа Спасителя, на Северном вокзале, откуда отправляются комфортные поезда «Ласточка» на побережье Балтийского моря! Для любителей экотуризма рядом Ботанический сад. Ближайший аэропорт - Храброво, в 18 км от апартаментов .',
        info: info,
        price: 30000
      },
      { 
        id: 2,
        name: 'Central Apartment',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Москва, ул. Тверской бульвар, д. 7',
        short_note: 'Прекрасные апартаменты в центре Москвы с красивым видом',
        full_note: '',
        price: 10000
      },
      { 
        id: 3,
        name: 'Zelenogradsk',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Зеленоград, ул. Карла Маркса, д. 238, к. 4, кв. 191',
        short_note: 'Прекрасные апартаменты в городе Зеленоград для отдыха',
        full_note: '',
        price: 10000
      }
    ])
  }, [])
  

  return (
    <div className='apartments'>
      {apartments.map(apartment => (
        <ApartmentCard 
          key={apartment.id}
          name={apartment.name}
          images={apartment.images}
          address={apartment.address}
          short_note={apartment.short_note}
          full_note={apartment.full_note}
          price={apartment.price}
          info={apartment.info}
        />
      ))}
    </div>
  )
}
