import { actionTypes } from '../actions'
import userEnterReducer from './userEnterReducer'

test('returns default initial state of "null" when no action is passed', () => {
  const newState = userEnterReducer(undefined, {})
  expect(newState).toBeNull()
})
test('returns state of "inProgress" upon receiving action of type `USER_ENTERING`', () => {
  const newState = userEnterReducer(undefined, { type: actionTypes.USER_ENTERING })
  expect(newState).toBe("inProgress")
})
test('returns state of "done" upon receiving action of type `USER_ENTERED`', () => {
  const newState = userEnterReducer(undefined, { type: actionTypes.USER_ENTERED })
  expect(newState).toBe("done")
})
test('returns state of null opon receiving action of type `RESET_GAME`', () => {
  const newState = userEnterReducer(undefined, { type: actionTypes.RESET_GAME })
  expect(newState).toBeNull()
})