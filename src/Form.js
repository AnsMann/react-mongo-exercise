import React from 'react'
import styled from 'styled-components'

const Formbox = styled.form`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`

function FormInput({ name }) {
  return (
    <label>
      {name.toUpperCase()}:{' '}
      <input name={name} type='text' placeholder={`insert ${name} here`} />
    </label>
  )
}

export function CreateForm({ history, onSubmit }) {
  return (
    <>
      <h1>Create Card</h1>
      <Formbox onSubmit={event => onSubmit(event, history)}>
        <FormInput name={'title'} />
        <FormInput name={'description'} />
        <FormInput name={'tags'} />
        <button>Submit</button>
      </Formbox>
    </>
  )
}
