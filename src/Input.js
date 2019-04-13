import React, { Component } from 'react'
import { connect } from 'react-redux'

import { guessWord, gaveUp } from './actions'

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props)

    this.inputBox = React.createRef()
    this.handleSubmitGuessWord = this.handleSubmitGuessWord.bind(this)
    this.handleClickGiveUp = this.handleClickGiveUp.bind(this)
  }

  handleSubmitGuessWord(e) {
    e.preventDefault()
    const guessWord = this.inputBox.current.value
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessWord)
      this.inputBox.current.value = ''
    }
  }

  handleClickGiveUp(e) {
    e.preventDefault()
    this.props.gaveUp()
  }

  render() {
    const contents = this.props.success || this.props.giveUp
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            ref={this.inputBox}
            placeholder="enter guess"/>
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={this.handleSubmitGuessWord}>
            Submit
          </button>
          <button
            data-test="give-up-button"
            className="btn btn-danger mb-2"
            onClick={this.handleClickGiveUp}
          >
            Give Up
          </button>
        </form>
      )
    return (
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success, giveUp }) => {
  return { success, giveUp }
}

export default connect(mapStateToProps, { guessWord, gaveUp })(UnconnectedInput)