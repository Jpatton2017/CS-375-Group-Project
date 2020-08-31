// https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571
import React from 'react'
import './App.css'
import { Container } from './Container'
import { Filler } from './Filler'

const App = () => {

  const triggerText = 'Open form'
  const onSubmit = (event) => {
    event.preventDefault(event)
      /*
      NOTE The third part of the below parameters for console.log represent
        the fields of your form. You can consider these commands filler commands
        that can later be replaced by commands that send the provided user data
        to a Postgres database, etc.
      */
    console.log(event.target.name.value)
    console.log(event.target.email.value)
  }

  return (
    <div className="App">
      <Filler />
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      <Filler />
      <Filler />
      <Filler />
      <Filler />
    </div>
  )
}
export default App
