import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  test('renders with no error', () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })
  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instruction')
    expect(instructions.text().lenght).not.toBe(0)
  })
})
describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 2 },
    { guessedWord: 'party', letterMatchCount: 1 },
  ]
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words")
    expect(guessedWordsNode.length).toBe(1)
  })
  test('renders number columns of guessed words table', () => {
    const guessedWordIndexes = findByTestAttr(wrapper, 'guessed-word-index')
    const indexTextSet = new Set(guessedWordIndexes.map(wrapper => wrapper.text()))
    const expectedSet = new Set(guessedWords.map((word, index) => (index+1).toString()))
    expect(indexTextSet).toEqual(expectedSet)
  })
  test('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  })
  
})