import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let content = null
  if (!props.guessedWords.length) {
    content = (
      <span data-test="guess-instruction">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td data-test="guessed-word-index">{index+1}</td>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr><td>#</td><td>Guesse</td><td>Letter Match Count</td></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test="component-guessed-words">
      {content}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords