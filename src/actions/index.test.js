import { correctGuess, actionTypes } from './'

describe('correctGueses', () => {
  test('returns an action with types `CORRECT_GUESS`', () => {
    const action = correctGuess()
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})