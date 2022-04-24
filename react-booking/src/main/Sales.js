import React from 'react'

export default function Sales() {

  const all_sales = [[7, 5],[14, 10]]

  return (
    <div className='sales'>
      <h2>Бронирование нескольких дней всегда выгоднее!</h2>
      {all_sales.map((sale) => (
        <div key={sale[0]}>От {sale[0]} дней: {sale[1]}%</div>
      ))}
    </div>
  )
}
