import { actionTypes } from '../actions'
import guessedWordReducer from './guessedWordsReducer'

test('returns state of [] upon receiving an action of type `RESET_GAME`', () => {
  const lastState = [{ guessedWord: 'train', letterMatchCount: 3 }]
  const newState = guessedWordReducer(lastState, { type: actionTypes.RESET_GAME })
  expect(newState).toEqual([])
})