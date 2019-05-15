export function getData() {
  return fetch('/cards').then(res => res.json())
}

export function postCard(event) {
  const { tags, title, description } = event.target
  const tagArray = tags.value.split(',').map(value => value.trim())
  return fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      tags: tagArray
    })
  }).then(res => res.json())
}

export function patchCard(card) {
  return fetch(`/cards/${card._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      bookmarked: !card.bookmarked
    })
  }).then(res => res.json())
}

export function setLocal(storageName, card) {
  localStorage.setItem(storageName, JSON.stringify(card))
}

export function getLocal(storageName) {
  return JSON.parse(localStorage.getItem(storageName.cards))
}
