
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { GcalSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GcalSDK.test()
    equal(null !== testsdk, true)
  })

})
