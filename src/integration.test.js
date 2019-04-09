import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfullGuess = 'train'
  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('update state correctly for unsuccessfull guess', () => {
      store.dispatch(guessWord(unsuccessfullGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfullGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)
    })
    test('update state correctly for successfull guess', () => {})
  })
  describe('some guessed words', () => {
    test('update state correctly for unsuccessfull guess', () => {})
    test('update state correctly for successfull guess', () => {})
  })
})