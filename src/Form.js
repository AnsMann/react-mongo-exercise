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
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`
const SubmitButton = styled.button`
  width: 100%;
  margin: 10px 0;
  font-size: 20px;
`
const Headline = styled.h1`
  background: grey;
  height: 100%;
  color: black;
  text-align: center;
`

function FormInput({ name }) {
  return (
    <StyledLabel>
      {name.toUpperCase()}:
      <input name={name} type='text' placeholder={`insert ${name} here`} />
    </StyledLabel>
  )
}

export function CreateForm({ history, onSubmit }) {
  return (
    <>
      <Headline>Create Card</Headline>
      <Formbox onSubmit={event => onSubmit(event, history)}>
        <FormInput name={'title'} />
        <FormInput name={'description'} />
        <FormInput name={'tags'} />
        <SubmitButton>Submit</SubmitButton>
      </Formbox>
    </>
  )
}
