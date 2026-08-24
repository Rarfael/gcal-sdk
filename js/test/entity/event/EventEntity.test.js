
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { GcalSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('EventEntity', async () => {

  test('instance', async () => {
    const testsdk = GcalSDK.test()
    const ent = testsdk.Event()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const event_ref01_ent = client.Event()
    let event_ref01_data = setup.data.new.event['event_ref01']

    event_ref01_data = (await event_ref01_ent.create(event_ref01_data)).data()
    assert(null != event_ref01_data.id)


    // LIST
    const event_ref01_match = {}

    const event_ref01_list = (await event_ref01_ent.list(event_ref01_match)).map((e) => e.data())

    assert(!isempty(select(event_ref01_list, { id: event_ref01_data.id })))


    // UPDATE
    const event_ref01_data_up0 = {}
    event_ref01_data_up0.id = event_ref01_data.id

    const event_ref01_markdef_up0 = { name: 'created', value: 'Mark01-event_ref01_' + setup.now }
    event_ref01_data_up0 [event_ref01_markdef_up0.name] = event_ref01_markdef_up0.value

    const event_ref01_resdata_up0 = (await event_ref01_ent.update(event_ref01_data_up0)).data()
    assert(event_ref01_resdata_up0.id === event_ref01_data_up0.id)

    assert(event_ref01_resdata_up0[event_ref01_markdef_up0.name] === event_ref01_markdef_up0.value)


    // LOAD
    const event_ref01_match_dt0 = {}
    event_ref01_match_dt0.id = event_ref01_data.id
    const event_ref01_data_dt0 = (await event_ref01_ent.load(event_ref01_match_dt0)).data()
    assert(event_ref01_data_dt0.id === event_ref01_data.id)


    // REMOVE
    const event_ref01_match_rm0 = {}
    event_ref01_match_rm0.id = event_ref01_data.id
    await event_ref01_ent.remove(event_ref01_match_rm0)
  

    // LIST
    const event_ref01_match_rt0 = {}

    const event_ref01_list_rt0 = (await event_ref01_ent.list(event_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(event_ref01_list_rt0, { id: event_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/event/EventTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GcalSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['event01','event02','event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GCAL_TEST_EVENT_ENTID': idmap,
    'GCAL_TEST_LIVE': 'FALSE',
    'GCAL_TEST_EXPLAIN': 'FALSE',
    'GCAL_APIKEY': 'NONE',
  })

  idmap = env['GCAL_TEST_EVENT_ENTID']

  if ('TRUE' === env.GCAL_TEST_LIVE) {
    client = new GcalSDK(merge([
      {
        apikey: env.GCAL_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GCAL_TEST_EXPLAIN,
    now: Date.now(),
  }

  return setup
}
  
