import React from 'react'

function FormInput({ name }) {
  return (
    <label>
      {name.toUpperCase()}:{' '}
      <input name={name} type='text' placeholder={`insert ${name} here`} />
    </label>
  )
}

export function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <FormInput name={'title'} />
      <FormInput name={'description'} />
      <FormInput name={'tags'} />
      <button>Submit</button>
    </form>
  )
}
