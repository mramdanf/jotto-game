import { storeFactory } from '../test/testUtils'
import { guessWord, setUserSecretWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfullGuess = 'train'
  describe('no guessed words', () => {
    let store
    const initialState = { 
      secretWord, 
      giveUp: false, 
      userEnter: null,
      serverError: false,
    }
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
    test('update state correctly for successfull guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  })
  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }]
    const initialState = { 
      guessedWords, 
      secretWord, 
      giveUp: false, 
      userEnter: null,
      serverError: false,
    }
    let store
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('update state correctly for unsuccessfull guess', () => {
      store.dispatch(guessWord(unsuccessfullGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfullGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    test('update state correctly for successfull guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})
describe('setUserSecretWord action dispatcher', () => {
  let store, newState
  
  let userSecretWord = 'lunch'
  
  const initialState = { secretWord: 'party' }

  beforeEach(() => {
    store = storeFactory(initialState)
    store.dispatch(setUserSecretWord(userSecretWord))
    newState = store.getState()
  })
  test('update `secretWord` correctly after entered word', () => {
    expect(newState.secretWord).toBe(userSecretWord)
  })
  test('update `userEnter` correctly after entered word', () => {
    expect(newState.userEnter).toBe('done')
  })
})