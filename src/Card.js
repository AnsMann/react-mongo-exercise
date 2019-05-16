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
  grid-template-rows: 40px auto auto;
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
  min-height: 50px;
`

const Bookmark = styled.button`
  background: aqua;
  padding: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
`

export default function Card(props) {
  const { title, description, tags, bookmarked, onClick } = props
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tagbox>{Tag(tags)}</Tagbox>
      <Bookmark onClick={onClick}>
        {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </Bookmark>
    </StyledCard>
  )
}
