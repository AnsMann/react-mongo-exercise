import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  background: grey;
  padding: 10px;
  text-decoration: none;
  color: black;
  border: 1px solid white;
  &.active {
    background: crimson;
  }
`

const StyledFooter = styled.footer`
  background: grey;
  height: 100%;
`

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`

export function Navigation() {
  return (
    <StyledFooter>
      <StyledNav>
        <StyledLink exact to='/'>
          Cards
        </StyledLink>
        <StyledLink to='/create'>Create</StyledLink>
      </StyledNav>
    </StyledFooter>
  )
}
