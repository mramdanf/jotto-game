import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSecretWord, resetSuccess, resetGuessedWords } from './actions'

export class UnconnectedNewWord extends Component {
  handleNewWordBtnClick = () => {
    this.props.resetSuccess()
    this.props.resetGuessedWords()
    this.props.getSecretWord()
  }
  render() {
    return (
      <div data-test="component-new-word">
        { this.props.success 
          ? (
            <button 
              data-test="new-word-button"
              className="btn btn-primary"
              onClick={this.handleNewWordBtnClick}
            >New Word</button>
          )
          : null }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(
  mapStateToProps, 
  { getSecretWord, resetSuccess, resetGuessedWords }
)(UnconnectedNewWord)