import sinon from 'sinon'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

beforeEach(() => {
  sinon.stub(console, 'error')
  .callsFake(console.warn)
})
// While not forgetting to restore it afterwards
afterEach(() => { console.error.restore() })
