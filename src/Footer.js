import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  background: grey;
  padding: 10px;
  text-decoration: none;
  color: black;
  &.active {
    background: crimson;
  }
`

const StyledFooter = styled.footer``

const StyledNav = styled.nav`
  height: 30px;
  display: flex;
  align-items: center;
`

export function Navigation() {
  return (
    <StyledFooter>
      <StyledNav>
        <StyledLink to='/cards'>Cards</StyledLink>
        <StyledLink to='/create'>Create</StyledLink>
      </StyledNav>
    </StyledFooter>
  )
}
