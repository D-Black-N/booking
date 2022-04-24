import React, { useEffect, useState } from 'react'
import TableCalendar from './TableCalendar'

export default function Calendar({ field }) {
  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState(new Date().getMonth())
  // let output_date = date

  const handleChangeMonth = (event) => {
    const class_list = event.target.classList
    if (!class_list.contains('blocked')) {
      const dat = new Date(date)
      if (class_list.contains('left')) {
        setDate(prev => new Date(prev).setMonth(new Date(prev).getMonth() - 1))
        if (dat.getMonth() === month + 1)
          class_list.add('blocked')
        else
          if (dat.getMonth() === month + 6)
            document.querySelector('.right').classList.remove('blocked')
      }
      else
      if (class_list.contains('right')) {
        setDate(prev => new Date(prev).setMonth(new Date(prev).getMonth() + 1))
        if (dat.getMonth() === month + 6)
          class_list.add('blocked')
        else
          if (dat.getMonth() === month)
            document.querySelector('.left').classList.remove('blocked')
      }
    }
  }  

  return (
    <div className='calendar'>
      <div className='selected-month' onClick={handleChangeMonth}>
        <div className='arrow'><i className='left blocked'></i></div>
        <div className='month'>
          { new Date(date).toLocaleDateString('ru-RU', {month: 'long', year: 'numeric'}) }
        </div>
        <div className='arrow'><i className='right'></i></div>
      </div>
      <div className='week-days'>
        <TableCalendar date={new Date(date)} month={month} field={field} />
      </div>  
    </div>
  )
}

