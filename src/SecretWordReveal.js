import React from 'react'
import PropTypes from 'prop-types'

const SecretWordReveal = (props) => {
  return props.display 
  ? (
    <div
      data-test="component-secret-word-reveal"
      className="alert alert-danger"
    >
    The secret word was <q>{props.secretWord}</q>&nbsp;
     Better luck next time
    </div>
  )
  : (
    <div
      data-test="component-secret-word-reveal"
    >
    </div>
  )
}

SecretWordReveal.propTypes = {
  display: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
}

export default SecretWordReveal