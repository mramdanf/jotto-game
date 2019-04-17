import moxios from 'moxios'

import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './'

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('adds response word to state', () => {
    const secretWord = 'party'
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState()
        expect(newState.secretWord).toBe(secretWord)
      })
  })
})

describe('update serverError state to `true`', () => {
  beforeEach(() => moxios.install() )
  afterEach(() => moxios.uninstall() )
  test('when server return with status 4xx', () => {
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 404,
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState()
        expect(newState.serverError).toBe(true)
      })
  })
  test('when server return with status 5xx', () => {
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 500,
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState()
        expect(newState.serverError).toBe(true)
      })
  })
})