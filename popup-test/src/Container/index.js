// NOTE This component is considered "stateful" because of the use of
// the `isShown` state
  // This is necessary because we want
  // This checks to see if isShown is true.
    // NOTE This statement uses the ternary operator
    // General format: condition ? ifTrue : else

      /*
      - Click outside the Modal to exit it
      - Click the escape key to close the Modal
      - Close function that closes the Modal in response to either of the aforementioned events
      - Focus locked.
        - This allows you to use the TAB key to navigate b/w the various fields of the Modal in a loop
          - Without this feature enabled, after you got to the last field of the Modal,
          pressing the TAB key again would move the cursor outside of the Modal
        - The other ability this gives the Modal is the ability to not get selected when using the TAB key in the main page
          - We don't want the Modal popping up when we're just tabbing through our main web page
          - We only want the Modal to appear when a button is clicked, not in response to the press of a TAB key
      - The Modal shouldn't render at the same time as the main web page; we only want the Modal to render when the button is clicked
        - This is accomplished via conditional rendering
          - QUESTION What is conditional rendering?
        - As a result, the Modal shouldn't be a part of DOM until a button has been clicked that summons the Modal
        - The background shouldn't scroll when the Modal is active
        - Render the DOM within the body
        - QUESTION What is the purpose of the step and how is it implemented?

      */
import React, { Component } from 'react'
import Modal from '../Modal'
import TriggerButton from '../TriggerButton'

export class Container extends Component {
  state = { isShown: false }

showModal = () => {
  this.setState( {isShown: true}, () => {
    this.closeButton.focus()
  })
  this.toggleScrollLock()
}

closeModal = () => {
  this.setState( {isShown: false})
  this.TriggerButton.focus()
  this.toggleScrollLock()
}

onKeyDown = (event) => {
  if (event.keyCode === 27) {
    this.closeModal()
  }
}

onClickOutside = (event) => {
  if (this.modal && this.modal.contains(event.target)) return
  this.closeModal()
}

toggleScrollLock = () => {
  document.querySelector('html').classList.toggle('scroll-lock')
}

render() {
  return (
    // NOTE JSX can only return one component
      // Wrapping multiple components in React.Fragment is a workaround
      // for this limitation.
    <React.Fragment>
      <TriggerButton
        showModal={this.showModal} // Allows the Modal to display when button clicked
        buttonRef={(n) => (this.TriggerButton = n)}
        triggerText={this.props.triggerText} // The text in the trigger button (the "label" for the button)
      />


      {this.state.isShown ? (
        <Modal
          onSubmit={this.props.onSubmit} //
          modalRef={(n) => (this.modal = n)}
          buttonRef={(n) => (this.closeButton = n)}
          closeModal={this.closeModal} // A close function that closes the Modal in response to onKeyDown or onClickOutside events
          onKeyDown={this.onKeyDown} // Close the Modal by pressing the Esc key
          onClickOutside={this.onClickOutside} // Exit the Modal by clicking outside of it
        />
        ) : null
      }
    </React.Fragment>
    )

  }
}

export default Container
