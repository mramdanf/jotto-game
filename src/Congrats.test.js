import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr, checkProps } from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = { success: false }

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

test('renders whitout error', () => {
  const wrapper = setup()
  const componentCongrats = findByTestAttr(wrapper, 'component-congrats')
  expect(componentCongrats.length).toBe(1)
})
test('renders no text when `success` props is false', () => {
  const wrapper = setup({ success: false })
  const componentCongrats = findByTestAttr(wrapper, "component-congrats")
  expect(componentCongrats.text()).toBe('')
})
test('renders non-empty congrats when `success` props is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, "congrats-message")
  expect(message.text().lenght).not.toBe(0)
})
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps)
})