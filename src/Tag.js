import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.span`
  display: inline-flex;
  justify-content: center;
  background: skyblue;
  margin: 5px 10px;
  border-radius: 5px;
  padding: 5px;
`

export function Tag(tagList) {
  return tagList.map(tag => <StyledTag>{tag}</StyledTag>)
}
