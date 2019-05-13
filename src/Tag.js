import React from 'react'

export function Tag(tagList) {
  return tagList.map(tag => <span>{tag}</span>)
}
