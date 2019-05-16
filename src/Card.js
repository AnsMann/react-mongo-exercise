import React from 'react'
import { Tag } from './Tag'
import styled from 'styled-components'

const Title = styled.h2`
  margin: 0;
  border: solid 1px;
  width: 100%;
  text-align: center;
  background: hotpink;
`
const StyledCard = styled.li`
  display: grid;
  grid-template-rows: 30px auto auto;
  width: 400px;
  position: relative;
  margin-bottom: 20px;
`
const Description = styled.p`
  padding: 5px;
  background: lightgreen;
  width: 100%;
  margin: 0;
  border-left: solid 1px;
  border-right: solid 1px;
`

const Tagbox = styled.div`
  border-bottom: solid 1px;
  border-left: solid 1px;
  border-right: solid 1px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Bookmark = styled.button`
  background: salmon;
  padding: 5px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  border: none;
`

export default function Card(props) {
  const { title, desc, tags, bookmarkStatus, onClick } = props
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Tagbox>{Tag(tags)}</Tagbox>
      <Bookmark onClick={onClick}>
        {bookmarkStatus ? 'Bookmarked' : 'Bookmark'}
      </Bookmark>
    </StyledCard>
  )
}
