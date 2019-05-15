import React, { Component } from 'react'
import { getData, postCard, setLocal, getLocal, patchCard } from './services'
import { CardList } from './CardList'
import { CreateForm } from './Form'
import { Navigation } from './Footer'
import { BrowserRouter, Route, history } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
height: 100vh;
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
    history.push('/cards')
  }

  updateCard = newCard => {
    const cards = this.state.cards.slice()
    const index = this.state.cards.findIndex(card => card._id === newCard.id)
  }

  handleClickBookmark = card => {
    patchCard(card)
      .then(data => this.setState({ cards: data }))
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
            path='/cards'
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
