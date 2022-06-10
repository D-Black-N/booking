import React from 'react'
import NewRewiew from './NewRewiew'
import Rewiew from './Rewiew'

export default function Rewiews() {

  const rewiews = [
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
    "Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...Какой-то отзыв...",
  ]

  return (
    <div className='rewiews'>
      <NewRewiew />
      <div className='comments'>
        { rewiews.map((rewiew, index) => (
          <Rewiew key={index} text={rewiew} />
        ))}
      </div>
    </div>
  )
}