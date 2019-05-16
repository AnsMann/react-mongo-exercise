import React, { Component } from 'react'
import { getData, postCard, setLocal, getLocal, patchCard } from './services'
import { CardList } from './CardList'
import { CreateForm } from './Form'
import { Navigation } from './Footer'
import { BrowserRouter, Route, history } from 'react-router-dom'
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

export default class App extends Component {
  state = {
    cards: getLocal('cardsInLocalStorage') || []
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error))
  }

  handleSubmit = (event, history) => {
    event.preventDefault()
    postCard(event)
      .then(card => {
        this.setState({ cards: [...this.state.cards, card] })
      })
      .catch(err => console.log(err))
    history.push('/')
  }

  handleClickBookmark = card => {
    const { cards } = this.state
    patchCard(card)
      .then(newCard => {
        const index = cards.findIndex(card => card._id === newCard._id)
        this.setState({
          cards: [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state) {
      setLocal('cardsInLocalStorage', this.state)
    }
  }

  render() {
    const { cards } = this.state

    return (
      <Grid>
        <GlobalStyles />
        <BrowserRouter>
          <Route
            exact
            path='/'
            render={props => (
              <CardList
                cards={cards}
                onClickBookmark={this.handleClickBookmark}
              />
            )}
          />
          <Route
            path='/create'
            render={props => (
              <CreateForm onSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Navigation />
        </BrowserRouter>
      </Grid>
    )
  }
}
