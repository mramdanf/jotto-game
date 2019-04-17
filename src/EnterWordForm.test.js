import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import EnterWordForm from './EnterWordForm'

const defaultProps = { formAction: () => {} }

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<EnterWordForm {...setupProps} />)
}

describe('renders', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-enter-word-form')
    expect(component.length).toBe(1)
  })
  test('renders instructions', () => {
    const instComponent = findByTestAttr(wrapper, 'enter-word-instructions')
    expect(instComponent.length).toBe(1)
  })
  test('renders input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.length).toBe(1)
  })
  test('renders submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.length).toBe(1)
  })
})
test('does not throw warning with expected props', () => {
  checkProps(EnterWordForm, defaultProps)
})
describe('submit button click', () => {
  let setUserSecretWordMock
  const userSecretWord = 'lunch'
  beforeEach(() => {
    setUserSecretWordMock = jest.fn()
    const props = {
      formAction: setUserSecretWordMock
    }

    const wrapper = setup(props)

    wrapper.instance().inputBox.current = { value: userSecretWord }

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })
  })
  test('calls `setUserSecretWord` prop', () => {
    expect(setUserSecretWordMock.mock.calls.length).toBe(1)
  })
  test('`setUserSecretWord` called with input value as argument', () => {
    const userSecretWordArg = setUserSecretWordMock.mock.calls[0][0]
    expect(userSecretWordArg).toBe(userSecretWord)
  })
})