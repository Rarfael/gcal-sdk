
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GcalSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GcalSDK.test()
    equal(null !== testsdk, true)
  })

})
