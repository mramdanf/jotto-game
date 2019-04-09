import { combineReducers } from 'redux'
import success from './successReducer'
import guessWords from './guessedWordsReducer'

export default combineReducers({
  success,
  guessWords
})