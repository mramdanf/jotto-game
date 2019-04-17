import React from 'react'
import { shallow } from 'enzyme'

import App, { UnconnectedApp } from './App'
import { storeFactory, findByTestAttr } from '../test/testUtils'

const defaultState = {
  giveUp: false,
  secretWord: 'party',
}

const setup = (initialState={}) => {
  const setupState = { ...defaultState, ...initialState }
  const store = storeFactory(setupState)
  const wrapper = shallow(<App store={store} />).dive()
  return wrapper
}

describe('redux props', () => {
  test('has success piece of state in the props', () => {
    const success = true
    const wrapper = setup({ success })
    const successProps = wrapper.instance().props.success
    expect(successProps).toBe(success)
  })
  test('has secretWord piece of state in the props', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  test('has guessedWords piece of state in the props', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProps = wrapper.instance().props.guessedWords
    expect(guessedWordsProps).toEqual(guessedWords)
  })
  test('has userEnter piece of state in the props', () => {
    const wrapper = setup({ userEnter: null })
    expect(wrapper.instance().props.userEnter).toBeNull()
  })
  test('`getSecretWord` action creator is a function props', () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
  test('`resetAction` action creator is a function props', () => {
    const wrapper = setup()
    const resetActionProp = wrapper.instance().props.resetGame
    expect(resetActionProp).toBeInstanceOf(Function)
  })
})
test('`getSecretWord` runs on app mount', () => {
  const getSecretWordMock = jest.fn()

  const props = {
    ...defaultState,
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }

  // Set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />)

  // run lifecycle method
  wrapper.instance().componentDidMount()

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length

  expect(getSecretWordCallCount).toBe(1)
})
test('renders total guessed word component', () => {
  const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
  const wrapper = setup({ guessedWords })
  const totalGuessedWordsComponent = findByTestAttr(wrapper, 'component-total-guessed-words')
  expect(totalGuessedWordsComponent.length).toBe(1)
})
test('renders userEnteredForm when userEnter props is "inProgess"', () => {
  const wrapper = setup({ userEnter: 'inProgress' })
  const component = findByTestAttr(wrapper, 'use-user-entered-word')
  expect(component.length).toBe(1)
})
test('renders inputComponent when userEnter props is not "inProgess"', () => {
  const wrapper = setup({ userEnter: null })
  const component = findByTestAttr(wrapper, 'use-random-secret-word')
  expect(component.length).toBe(1)
})
