import store from './store'

describe('redux store', () => {
  describe('getState()', () => {
    it('function exists', () => {
      expect(typeof store.getState).toEqual('function')
    })

    it('returns an object', () => {
      expect(typeof store.getState()).toEqual('object')
    })
  })

  describe('dispatch()', () => {
    it('function exists', () => {
      expect(typeof store.dispatch).toEqual('function')
    })
  });

  describe('subscribe()', () => {
    it('function exists', () => {
      expect(typeof store.subscribe).toEqual('function')
    })
  })

  describe('replaceReducer()', () => {
    it('function exists', () => {
      expect(typeof store.replaceReducer).toEqual('function')
    })
  })

})
