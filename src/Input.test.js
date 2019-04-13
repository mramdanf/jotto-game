import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'


/**
 * Factory function to create ShallowWrapper for Input Component
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  return shallow(<Input store={store} />).dive()
}

describe('renders', () => {
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
    test('renders give up button', () => {
      const giveUpButton = findByTestAttr(wrapper, 'give-up-button')
      expect(giveUpButton.length).toBe(1)
    })
  })
  describe('word has been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })
    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
    test('does not render give up button', () => {
      const giveUpButton = findByTestAttr(wrapper, 'give-up-button')
      expect(giveUpButton.length).toBe(0)
    })
  })
})
describe('reudx props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper = setup({ success })
    const successProps = wrapper.instance().props.success
    expect(successProps).toBe(success)
  })
  test('has giveUp piece of state as prop', () => {
    const giveUp = true
    const wrapper = setup({ giveUp })
    const giveUpProps = wrapper.instance().props.giveUp
    expect(giveUpProps).toBe(giveUp)
  })
  test('`guessWord` action creator is a function props', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
  test('`giveUp` action creator is a function props', () => {
    const wrapper = setup()
    const giveUpProps = wrapper.instance().props.gaveUp
    expect(giveUpProps).toBeInstanceOf(Function)
  })
})
test('calls `giveUp` prop upon "giveUp" button click', () => {
  const gaveUpMock = jest.fn()
  const props = { success: false, gaveUp: gaveUpMock}
  const wrapper = shallow(<UnconnectedInput {...props} />)

  const gaveUpButton = findByTestAttr(wrapper, 'give-up-button')
  gaveUpButton.simulate('click', { preventDefault() {} })

  expect(giveUpMock.mock.calls.length).toBe(1)
})
describe('`guessWord` action creator call', () => {
  let guessWordMock,
      guessWord = 'train',
      wrapper
  beforeEach(() => {
    // Setup mock for `guessWord`
    guessWordMock = jest.fn()
    const props = {
      guessWord: guessWordMock,
      success: false,
    }

    // Setup component with guessWordMock as the guessWord props
    wrapper = shallow(<UnconnectedInput {...props} />)

    // Add value to input box
    wrapper.instance().inputBox.current = { value: guessWord }
    
    // Simulate submit button click
    const submitBtn = findByTestAttr(wrapper, 'submit-button')
    submitBtn.simulate('click', { preventDefault() {} })
  })
  test('`guessWord` function triggered when submit click', () => {
    const submitBtnClickCount = guessWordMock.mock.calls.length
    expect(submitBtnClickCount).toBe(1)
  })
  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0]
    expect(guessWordArg).toBe(guessWord)
  })
  test('input box clears on submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('')
  })
})