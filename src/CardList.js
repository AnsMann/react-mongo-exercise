import React from 'react'
import Card from './Card'

export function CardList(cards, clickBookmark) {
  return (
    <main>
      <h1>Cards</h1>
      <ul>
        {cards.map(card => (
          <Card
            key={card._id}
            title={card.title}
            desc={card.description}
            tags={card.tags}
            bookmarkStatus={card.bookmarked}
            onClick={clickBookmark}
          />
        ))}
      </ul>
    </main>
  )
}
