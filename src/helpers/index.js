/**
 * @method getLetterMatchCount
 * @param {string} guessedWrod - Guessed word.
 * @param {string} secretWrod - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWrod) {
  const secretWordLetterSet = new Set(secretWrod.split(''))
  const guessedWordLetterSet = new Set(guessedWord.split(''))
  return [...secretWordLetterSet].filter(letter => guessedWordLetterSet.has(letter)).length
}