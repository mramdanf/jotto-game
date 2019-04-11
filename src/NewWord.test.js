import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory, findByTestAttr } from "../test/testUtils";
import NewWord, { UnconnectedNewWord } from './NewWord'

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
describe('Redux props', () => {
  let wrapper, componentProps
  beforeEach(() => {
    const initialState = { success: false }
    wrapper = setup(initialState)

    componentProps = wrapper.instance().props
  })
  test('Has success piece of state', () => {
    expect(componentProps.success).toBe(false)
  })
  test('`resetSuccess` action creator is a function props', () => {
    expect(componentProps.resetSuccess).toBeInstanceOf(Function)
  })
  test('`resetGuessedWords` action creator is a function props', () => {
    expect(componentProps.resetGuessedWords).toBeInstanceOf(Function)
  })
  test('`getSecretWord` action creator is a function props', () => {
    expect(componentProps.getSecretWord).toBeInstanceOf(Function)
  })
})
describe('Action creator call', () => {
  let resetSuccessMock = jest.fn(),
      resetGuessedWordsMock = jest.fn(),
      getSecretWordMock = jest.fn()
  beforeEach(() => {
    // Setup props
    const props = {
      success: true,
      resetSuccess: resetSuccessMock,
      resetGuessedWords: resetGuessedWordsMock,
      getSecretWord: getSecretWordMock
    }

    // Prepare component
    const wrapper = shallow(<UnconnectedNewWord {...props} />)

    // Find newWord button and click
    const newWordBtn = findByTestAttr(wrapper, 'new-word-button')
    newWordBtn.simulate('click')

  })
  test('call `resetSuccess`, `resetGuessedWords`, `getSecretWord` when newWord button click', () => {
    const resetSuccessMockCallCount = resetSuccessMock.mock.calls.length
    const resetGuessedWordsMockCallCount = resetGuessedWordsMock.mock.calls.length
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length
    const total = resetSuccessMockCallCount + resetGuessedWordsMockCallCount + getSecretWordCallCount
    expect(total).toBe(3)
  })
})

// TODO propType checking, success props should be required