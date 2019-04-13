import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import NewWordButton from './NewWordButton'

const setup = (initialProps={}) => {
  const defaultProps = { display: false, resetAction() {} }
  const setupProps = { defaultProps, ...initialProps,  }
  return shallow(<NewWordButton {...setupProps} />)
}

describe('renders', () => {
  test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-new-word-button')
    expect(component.length).toBe(1)
  })
  test('renders no text when `display` props is false', () => {
    const wrapper = setup({ display: false })
    const component = findByTestAttr(wrapper, 'component-new-word-button')
    expect(component.text()).toBe('')
  })
  test('renders non-empty text when `display props is true`', () => {
    const wrapper = setup({ display: true })
    const component = findByTestAttr(wrapper, 'component-new-word-button')
    expect(component.text().length).not.toBe(0)
  })
})
test('does not throw warning with expected props', () => {
  const expectedProps = { display: true, resetAction() {} }
  checkProps(NewWordButton, expectedProps)
})
test('calls `resetAction` prop upon button click', () => {
  const resetActionMock = jest.fn()
  const props = { 
    display: true,
    resetAction: resetActionMock
  }
  
  const wrapper = setup(props)
  const button = findByTestAttr(wrapper, 'component-new-word-button')
  button.simulate('click')

  const resetActionMockCallCount = resetActionMock.mock.calls.length
  expect(resetActionMockCallCount).toBe(1)
})