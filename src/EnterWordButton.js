import React from 'react'
import PropTypes from 'prop-types'

const EnterWordButton = (props) => {
  return props.display
  ? (
    <button 
      data-test="component-enter-word-button"
      className="btn btn-primary"
      onClick={props.buttonAction}
    >
      Enter your own secret word
    </button>
  )
  : (
    <div data-test="component-enter-word-button"></div>
  )
}

EnterWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  buttonAction: PropTypes.func,
}

export default EnterWordButton