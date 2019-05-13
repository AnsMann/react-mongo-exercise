import React, { Component } from 'react'
import { getData, postCard, setLocal, getLocal, patchCard } from './services'
import { CardList } from './CardList'
import { CreateForm } from './Form'

export default class App extends Component {
  state = {
    cards: getLocal('cardsInLocalStorage') || []
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error))
  }

  handleSubmit = event => {
    event.preventDefault()
    postCard(event)
      .then(card => {
        this.setState({ cards: [...this.state.cards, card] })
      })
      .catch(err => console.log(err))
  }

  handleClickBookmark = event => {
    patchCard(event.target)
      .then(data => this.setState({ cards: data }))
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    setLocal('cardsInLocalStorage', this.state)
  }

  render() {
    const { cards } = this.state

    return (
      <>
        <CreateForm onSubmit={this.handleSubmit} />
        {CardList(cards, this.handleClickBookmark)}
      </>
    )
  }
}
