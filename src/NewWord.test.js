import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory, findByTestAttr } from "../test/testUtils";
import NewWord from './NewWord'

// Testing NewWord as connected component

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<NewWord store={store} />).dive()
  return wrapper
}

describe('NewWord component renders', () => {
  test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-new-word')
    expect(component.length).toBe(1)
  })
  test('renders NewWord component when success state is true', () => {
    const wrapper = setup({ success: true })
    const componentBtn = findByTestAttr(wrapper, 'new-word-button')
    expect(componentBtn.length).toBe(1)
  })
  test('does not renders NewWord component when success state is false', () => {
    const wrapper = setup({ success: false })
    const componentBtn = findByTestAttr(wrapper, 'new-word-button')
    expect(componentBtn.length).toBe(0)
  })
})
describe('NewWord button clicked', () => {
  test('success state should be false', () => {})
  test('guessedWords state should be zero length', () => {})
  test('getSecretWord action creator should be called', () => {})
})

// TODO propType checking, success props should be required