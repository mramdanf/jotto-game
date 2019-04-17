import React from 'react'
import PropTypes from 'prop-types'

class EnterWordForm extends React.Component {
  constructor(props) {
    super(props)

    this.inputBox = React.createRef()
    this.handleSubmitAction = this.handleSubmitAction.bind(this)
  }
  handleSubmitAction(e) {
    e.preventDefault()
    if (this.inputBox.current.value.length > 0)
      this.props.formAction(this.inputBox.current.value)
  }
  render() {
    return (
      <div data-test="component-enter-word-form">
        <p
          data-test="enter-word-instructions"
        >
          Enter a secret word for some one else to guess!
        </p>
        <form className="form-inline">
          <input
            data-test="input-box"
            type="text" 
            className="form-control mb-2"
            ref={this.inputBox}
          />
          <button 
            data-test="submit-button"
            className="btn btn-default"
            type="submit"
            onClick={this.handleSubmitAction}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

EnterWordForm.propTypes = {
  formAction: PropTypes.func.isRequired
}

export default EnterWordForm