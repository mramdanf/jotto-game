import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })
  test('returns correct count whene there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })
  test('returns correct count where there are duplicate letters in guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})