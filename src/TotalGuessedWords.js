import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TotalGuessedWords extends Component  {
  render() {
    return (
      <div
        data-test="component-total-guessed-words"
      >
        Total Guesses: {this.props.totalGuessedWords}
      </div>
    )
  }
}

TotalGuessedWords.propTypes = {
  totalGuessedWords: PropTypes.number.isRequired
}

export default TotalGuessedWords