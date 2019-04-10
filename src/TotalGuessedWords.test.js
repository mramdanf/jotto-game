import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import TotalGuessedWords from './TotalGuessedWords';

// test apakah component-total-guessed-words ter-render
// test apakah ada props totalGuessedWords
// test props type dan required dari props totalGuessedWords

const defaultProps = { totalGuessedWords: 0 }

const setup = (props={}) => {
  const propSetup = { ...defaultProps, ...props }
  const wrapper = shallow(<TotalGuessedWords {...propSetup} />)
  return wrapper
}

describe('TotalGuessedWords', () => {
  test('renders component totalGuessedWords without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-total-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders total guessed words text', () => {
    const totalGuessedWords = 2
    const wrapper = setup({ totalGuessedWords })
    const totalGuessedWordsText = findByTestAttr(wrapper, 'component-total-guessed-words')
    expect(totalGuessedWordsText.text()).toContain(totalGuessedWords.toString())
  })
})

