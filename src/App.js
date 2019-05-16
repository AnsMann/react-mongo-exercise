import React, { useState, useEffect } from 'react'
import { getData, postCard, setLocal, getLocal, patchCard } from './services'
import { CardList } from './CardList'
import { CreateForm } from './Form'
import { Navigation } from './Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {height: 100vh;
  margin: 0;
  padding: 20px;
  font-family: sans-serif;
  color: darkslategray;
  background: papayawhip;
}
`

const Grid = styled.main`
  display: grid;
  grid-template-rows: 50px auto 50px;
  justify-content: center;
  align-items: center;
`

export default function App() {
  const [cards, setCards] = useState(getLocal('cardsInLocalStorage') || [])

  useEffect(() => {
    getData()
      .then(allCards => setCards(allCards))
      .catch(error => console.log(error))
    setLocal('cardsInLocalStorage', cards)
  }, [cards])

  function handleSubmit(event, history) {
    event.preventDefault()
    postCard(event)
      .then(card => {
        setCards([...cards, card])
      })
      .catch(err => console.log(err))
    history.push('/')
  }

  function handleClickBookmark(card) {
    patchCard(card)
      .then(newCard => {
        const index = cards.findIndex(card => card._id === newCard._id)
        setCards([...cards.slice(0, index), newCard, ...cards.slice(index + 1)])
      })
      .catch(err => console.log(err))
  }

  return (
    <Grid>
      <GlobalStyles />
      <BrowserRouter>
        <Route
          exact
          path='/'
          render={props => (
            <CardList cards={cards} onClickBookmark={handleClickBookmark} />
          )}
        />
        <Route
          path='/create'
          render={props => <CreateForm onSubmit={handleSubmit} {...props} />}
        />
        <Navigation />
      </BrowserRouter>
    </Grid>
  )
}
