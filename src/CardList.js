import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Cardbox = styled.div`
  height: 80vh;
  overflow: scroll;
  justify-items: center;
`
const Headline = styled.h1`
  background: grey;
  height: 100%;
  color: black;
  text-align: center;
`
const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`

export function CardList({ cards, onClickBookmark }) {
  console.log('abc')
  return (
    <>
      <Headline>Cards</Headline>
      <Cardbox>
        <StyledList>
          {cards.map(card => (
            <Card
              key={card._id}
              {...card}
              onClick={() => onClickBookmark(card)}
            />
          ))}
        </StyledList>
      </Cardbox>
    </>
  )
}
