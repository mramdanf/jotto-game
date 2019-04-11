import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSecretWord, resetSuccess, resetGuessedWords } from './actions'

class NewWord extends Component {
  render() {
    return (
      <div data-test="component-new-word">
        { this.props.success 
          ? (
            <button 
              data-test="new-word-button"
              className="btn btn-primary"
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
)(NewWord)