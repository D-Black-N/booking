import React, { useState, useEffect } from 'react'

export default function TableCalendar({ date, month, field }) {
  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  const [date_param, setDateParam] = useState(0)
  // const [input_field, setInputField] = useState()

  const renderMonthArray = () => {
    const month_start = new Date(date.getFullYear(), date.getMonth(), 1)
    const month_end = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    let month_array = []
    month_array[0] = ['', '', '', '', '', '', '']
    let day = month_start.getDate()
    let week_day = month_start.getDay()
    if (week_day === 0)
      week_day = 7
    for (let i = week_day - 1; i < 7; i++) {
      month_array[0][i] = day
      day++
    }
    for (let i = 1; i < Math.ceil(month_end.getDate() / 7); i++) {
      month_array[i] = []
      let j = 0
      while (j < 7 && day <= month_end.getDate()) {
        month_array[i][j] = day
        j++
        day++
      }
    }
    let last_week = month_array[month_array.length - 1]
    if (last_week.length < 7)
      for (let i = last_week.length; i < 7; i++)
        last_week[i] = ''
    return month_array
  }

  const [month_days, setMonthDays] = useState(renderMonthArray())

  useEffect(() => {
    setMonthDays(renderMonthArray())
  }, [date])

  useEffect(() => {
    const td_nodes = document.querySelector('.table-calendar').querySelectorAll('td')
    let i = 0
    while (!td_nodes[i].classList.contains('hover')) {
      td_nodes[i].classList.add('hover')
      td_nodes[i].style.backgroundColor = ''
      i++
    }
    if (month === date.getMonth()) {
      i = 0
      while (Number(td_nodes[i].textContent) < date.getDate()) {
        td_nodes[i].classList.remove('hover')
        td_nodes[i].style.backgroundColor = '#E5E5E5'
        i++
      }
    }
  }, month_days)

  const handleSelectDate = (event) => {
    setDateParam(new Date(date.getFullYear(), date.getMonth(), Number(event.target.textContent)))
    document.querySelector('.calendar').style.display = 'none'
  }

  useEffect(() => { 
    if (date_param !== 0)
      field.value = new Date(date_param).toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'})
  }, [date_param])
  
  
  return (
    <table className='table-calendar'>
      <thead>
        <tr>
          { weekdays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody onClick={handleSelectDate}>
        { month_days.map((arr, index) => (
          <tr key={index}>
            { arr.map((day, ind) => (
                <td key={ind} className='hover'>{day}</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  )
}
