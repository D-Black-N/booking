import React from 'react'

export default function Sales() {

  const all_sales = [[7, 5],[14, 10]]

  return (
    <div className='sales'>
      <ol>
        {all_sales.map((sale) => (
          <li key={sale[0]}>От {sale[0]} дней: {sale[1]}%</li>
        ))}
      </ol>
    </div>
  )
}
