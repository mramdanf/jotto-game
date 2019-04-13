import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import SecretWordReveal from './SecretWordReveal'

const setup = (props={}) => {
  const defaultProps = { display: false, secretWord: 'party' }
  const setupProps = { ...defaultProps, ...props }
  return shallow(<SecretWordReveal {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const componet = findByTestAttr(wrapper, 'component-secret-word-reveal')
  expect(componet.length).toBe(1)
})
test('renders no text when `display` props is false', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-secret-word-reveal')
  expect(component.text().length).toBe(0)
})
test('renders message containts secret word when `display` props is true', () => {
  const wrapper = setup({ display: true })
  const component = findByTestAttr(wrapper, 'component-secret-word-reveal')
  expect(component.text()).toContain('party')
})
test('does not throw warning when with props', () => {
  const expectedProps = { display: false, secretWord: 'party' }
  checkProps(SecretWordReveal, expectedProps)
})