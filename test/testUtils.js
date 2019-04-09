import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from '../src/reducers'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}

/**
 * Return node(s) with given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - value of data-test attribute for search.
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(component.propTypes, confirmingProps, 'props', component.name)
  expect(propError).toBeUndefined()
}