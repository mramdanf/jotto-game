import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import TotalGuessedWords from './TotalGuessedWords'
import NewWordButton from './NewWordButton'
import SecretWordReveal from './SecretWordReveal'
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
        <SecretWordReveal 
          display={this.props.giveUp}
          secretWord={this.props.secretWord}
        />
        <NewWordButton 
          display={this.props.success || this.props.giveUp} 
          resetAction={this.props.resetGame} 
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuessedWords 
          data-test="component-total-guessed-words"
          totalGuessedWords={this.props.guessedWords.length} 
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords, giveUp }) => {
  return {
    success,
    secretWord,
    guessedWords,
    giveUp,
  }
}

export default connect(mapStateToProps, { getSecretWord, resetGame })(UnconnectedApp);
