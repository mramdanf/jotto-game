import { actionTypes } from '../actions'
import giveUpReducer from './giveUpReducer'

test('returns default initial state of false when no action is passed', () => {
  const newState = giveUpReducer(undefined, {})
  expect(newState).toBe(false)
})
test('returns `giveUp` state of true upon receiving action of type `GIVE_UP`', () => {
  const newState = giveUpReducer(false, { type: actionTypes.GIVE_UP })
  expect(newState).toBe(true)
})
test('returns `giveUp` state of false upon receiving action of type `RESET_GAME`', () => {
  const newState = giveUpReducer(false, { type: actionTypes.RESET_GAME })
  expect(newState).toBe(false)
})