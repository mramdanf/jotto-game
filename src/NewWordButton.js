import React from 'react'
import PropTypes from 'prop-types'

const NewWordButton = (props) => {
  return props.display 
    ? (
      <button
        data-test="component-new-word-button"
        onClick={props.resetAction}
      >
        New Word
      </button>
    ) : (
      <div data-test="component-new-word-button"></div>
    )
}

NewWordButton.propTypes = {
  display: PropTypes.bool,
  resetAction: PropTypes.func
}

export default NewWordButton