import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import TotalGuessedWords from './TotalGuessedWords'
import { getSecretWord } from './actions'
import NewWord from './NewWord';

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
        <NewWord 
          data-test="component-new-word"
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

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return {
    success,
    secretWord,
    guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
