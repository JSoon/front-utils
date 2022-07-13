exports.mochaHooks = {
  beforeEach: function () {
    // global setup for all tests
    console.log('mochaHooks: beforeEach')
  },
  afterAll: function () {
    // one-time final cleanup
    console.log('mochaHooks: afterAll')
  }
};