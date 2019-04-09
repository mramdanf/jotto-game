import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import { storeFactory } from '../test/testUtils'

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
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
 
  test('`getSecretWord` action creator is a function props', () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})