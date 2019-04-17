import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import EnterWordButton from './EnterWordButton'

const defaultProps = { display: false, buttonAction: () => {} }

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<EnterWordButton {...setupProps} />)
}

describe('renders', () => {
  test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-enter-word-button')
    expect(component.length).toBe(1)
  })
  test('renders non-empty text when `display` props is non-empty', () => {
    const wrapper = setup({ display: true })
    const component = findByTestAttr(wrapper, 'component-enter-word-button')
    expect(component.text().length).not.toBe(0)
  })
  test('renders empty text when `display` props is empty', () => {
    const wrapper = setup({ display: false })
    const component = findByTestAttr(wrapper, 'component-enter-word-button')
    expect(component.text().length).toBe(0)
  })
})
test('does not throw warning with expected props', () => {
  checkProps(EnterWordButton, defaultProps)
})
test('calls `buttonAction` prop upon button click', () => {
  const buttonActionMock = jest.fn()
  const props = {
    display: true,
    buttonAction: buttonActionMock
  }

  const wrapper = setup(props)
  const button = findByTestAttr(wrapper, 'component-enter-word-button')
  button.simulate('click')

  expect(buttonActionMock.mock.calls.length).toBe(1)
})
