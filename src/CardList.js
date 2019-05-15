import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Cardbox = styled.div`
  height: 80vh;
  overflow: scroll;
  justify-items: center;
`

export function CardList({ cards, onClickBookmark }) {
  return (
    <>
      <h1>Cards</h1>
      <Cardbox>
        <ul>
          {cards.map(card => (
            <Card
              key={card._id}
              title={card.title}
              desc={card.description}
              tags={card.tags}
              bookmarkStatus={card.bookmarked}
              onClick={onClickBookmark}
            />
          ))}
        </ul>
      </Cardbox>
    </>
  )
}
