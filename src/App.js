import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import TotalGuessedWords from './TotalGuessedWords'
import NewWordButton from './NewWordButton'
import SecretWordReveal from './SecretWordReveal'
import EnterWordButton from './EnterWordButton'
import EnterWordForm from './EnterWordForm'
import ServerError from './ServerError'
import { getSecretWord, resetGame, setUserEntering, setUserSecretWord } from './actions'

export class UnconnectedApp extends Component {
  constructor(props) {
    super(props)

    this.handleEnterWordFormSubmit = this.handleEnterWordFormSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getSecretWord()
  }

  handleEnterWordFormSubmit(userSecretWord) {
    this.props.setUserSecretWord(userSecretWord)
  }

  render() {
    let contents
    if (this.props.userEnter === 'inProgress') {
      contents = (
        <EnterWordForm
          data-test="use-user-entered-word"
          formAction={this.handleEnterWordFormSubmit}
        />
      )
    }
    else if (this.props.serverError) {
      contents = (
        <div data-test="display-server-error">
          <ServerError />
        </div>
      )
    }
    else {
      contents = (
        <div 
          data-test="use-random-secret-word"
        >
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
          <EnterWordButton 
            display={this.props.guessedWords.length === 0}
            buttonAction={this.props.setUserEntering}
          />
        </div>
      )
    }
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords, giveUp, userEnter, serverError }) => {
  return {
    success,
    secretWord,
    guessedWords,
    giveUp,
    userEnter,
    serverError,
  }
}

const actions = {
  getSecretWord,
  resetGame,
  setUserEntering,
  setUserSecretWord,
}

export default connect(mapStateToProps, actions)(UnconnectedApp);
