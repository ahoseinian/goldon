import sinon from 'sinon'
beforeEach(() => {
  sinon.stub(console, 'error')
  // .callsFake(console.warn)
})
// While not forgetting to restore it afterwards
afterEach(() => { console.error.restore() })
