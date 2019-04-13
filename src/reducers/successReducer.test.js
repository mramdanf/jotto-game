import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('return default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {})
  expect(newState).toBe(false)
})
test('returns state of true upon receiving an action of type `CORRECT_ACTION`', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(newState).toBe(true)
})
test('returns state of false upon receiving an action of type `RESET_GAME`', () => {
  const newState = successReducer(true, { type: actionTypes.RESET_GAME })
  expect(newState).toBe(false)
})