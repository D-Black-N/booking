import React from 'react'

export default function Descrioption({ name, address, note, price, info, contacts }) {
  return (
    <div className='description'>
      <h1 className='field-header'>{name}</h1>

      <div className='note'>
        <h3 className='field-header'>Описание</h3>
        <p className='text-field'>
          Мы рады встретить наших гостей в новых, роскошных Апартаментах Park apartments, в живописном и зеленом районе Верхнего озера Калининграда! Исторический район Марауненхоф старого Кенигсберга… &#127807; Великолепный вид из панорамных окон верхнего этажа на парковую зону, огороженная территория, лифт, парковка, WiFi. Квартира расположена в 3 минутах ходьбы от парка Юность и в 5 минутах до набережной красивейшего Верхнего озера с велодорожками, спортивными и детскими площадками. 15 минут – и вы у исторического памятника Башня Врангеля (1853г.) на пешеходной улице Профессора Баранова, площади Победы, в Музее янтаря, у Собора Христа Спасителя, на Северном вокзале, откуда отправляются комфортные поезда «Ласточка» на побережье Балтийского моря! Для любителей экотуризма рядом Ботанический сад. Ближайший аэропорт - Храброво, в 18 км от апартаментов &#127807;. 
        </p>
      </div>

      <div className='information'>
        <h3 className='field-header'>Информация</h3>
        <p className='text-field'>
        Апартаменты площадью 47м2, имеется гостиная-кухня, изолированная спальня, санузел с душевой кабиной. Максимальное количество гостей – 4 человека. <br/>
     Расположение спальных мест <br/>
     &emsp;- Гостиная-кухня – 1 раскладывающийся диван с полноценным матрасом 140см х 200см;<br/>
     &emsp;- Спальня – кровать с ортопедическим матрасом размером King-size, 180см х 200см.<br/>
     Удобства в квартире<br/>
    Апартаменты полностью оснащены всем необходимым для комфортного отдыха и проживания. Полы с подогревом, двухконтурный газовый котел, натуральный паркетный пол. Экоремонт из натуральных отделочных материалов. Высокоскоростной WiFi, бесплатный для наших гостей. <br/>
    &emsp;	Гостиная-кухня: кухня, холодильник, индукционная плита, духовка, кофемашина, стол со стульями, телевизор, раскладной двуспальный диван, посуда, панорамное остекление, сушилка для белья, моющие средства, чай, кофе, бутылочка воды – комплимент от хозяев, мини-бар (платно).<br/>
    &emsp;	Спальня: кровать размером King-size, комод для белья, прикроватные тумбочки, туалетный столик с зеркалом, пуф, стул, телевизор.<br/>
    &emsp;	Ванная: душевая кабина, раковина, туалет, стиральная машина, фен, шампунь, гель для душа, мыло, туалетная бумага.<br/>
    &emsp;	Прихожая: вместительный шкаф-купе, зеркало, пуф, утюг, гладильная доска.<br/>
    &emsp;Хлопковое постельное белье, полотенца и тапочки предоставляются всем гостям бесплатно.<br/>
    &emsp;Парковка бесплатная, на огороженной территории дома.<br/>
    &emsp;Детская и спортивная площадка на огороженной территории дома.<br/>
    &emsp;Порядок заселения/выселения<br/>
    &emsp;Стандартное время заселения 14-00 (местное время)<br/>
    &emsp;Стандартное время выселения 12-00 (местное время)<br/>
    &emsp;Возможность более раннего заселения и более позднего отъезда – по ПРЕДВАРИТЕЛЬНОЙ ДОГОВОРЕННОСТИ.<br/>
    &emsp;Трансфер по запросу, оплачивается дополнительно.<br/>
        </p>
      </div>

      <div className='address'>
        <h3 className='field-header'>Адрес</h3>
        <p className='text-field'>{address}</p>
      </div>

      <div className='contacts'>
        <h3 className='field-header'>Контакты</h3>
        <p className='text-field'>
          { contacts.map((cont, key) => (
            <p>Тел. {cont.tel} - {cont.fio}</p>
          )) }
        </p>
      </div>

      <div className='price'>
        <h2 className='field-header'>Стоимость брони: {price} &#8381; за сутки</h2>
        <p className='text-field'>{}</p>
      </div>

    </div>
  )
}
