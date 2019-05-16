import React from 'react'
import { Tag } from './Tag'

export default function Card(props) {
  const { title, desc, tags, bookmarkStatus, onClick } = props
  return (
    <li>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>{Tag(tags)}</div>
      <button onClick={onClick} className='bookmark'>
        {bookmarkStatus ? 'Bookmarked' : 'Bookmark'}
      </button>
    </li>
  )
}
