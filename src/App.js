import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import TotalGuessedWords from './TotalGuessedWords'
import NewWordButton from './NewWordButton'
import { getSecretWord, resetGame } from './actions'

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord()
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <NewWordButton display={this.props.success} resetAction={this.props.resetGame} />
        <TotalGuessedWords 
          data-test="component-total-guessed-words"
          totalGuessedWords={this.props.guessedWords.length} 
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return {
    success,
    secretWord,
    guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord, resetGame })(UnconnectedApp);
