'use strict'

const assert = require('assert/strict')

const ok = assert.ok

const {
  compress,
  uncompress
} = require('..')

describe('compressNumberString', function () {
  let v
  let a
  let b

  it('Should return itself while it is a falsy', function () {
    v = undefined
    ok(compress(v) === v)
    ok(uncompress(v) === v)
    v = false
    ok(compress(v) === v)
    ok(uncompress(v) === v)
    v = ''
    ok(compress(v) === v)
    ok(uncompress(v) === v)
    v = null
    ok(compress(v) === v)
    ok(uncompress(v) === v)
  })

  it('Should return a string', function () {
    ok(typeof compress('123') === 'string')
    ok(typeof uncompress('123') === 'string')
  })

  it('Should return the expected string', function () {
    ok(compress('1187784820269252608274985201') === 'f5nsewx9_2hjin0ruup')
    ok(compress('414321432432143214231') === '8vox_49a8l103h3')
  })

  it('Should return the same value after uncompress', function () {
    v = '678316473618687643261431724'
    a = compress(v)
    b = uncompress(a)
    ok(b === v)
  })

  it('Should support multi zero charaters (greater than 15)', function () {
    v = '9800000000000000000000000000000'
    a = compress(v)
    b = uncompress(a)
    ok(v === b)

    v = '5343000000000000000000000000000043243243200000000'
    a = compress(v)
    b = uncompress(a)
    ok(v === b)
  })

  it('Should not support leading zero', function () {
    v = '0321321321321321312'
    a = compress(v)
    ok(a === v)
  })

  it('Should support leading zero in segment', function () {
    v = '9876543000210987654321'
    a = compress(v)
    b = uncompress(a)
    ok(v === b)

    v = '9876540003210987654321'
    a = compress(v)
    b = uncompress(a)
    ok(v === b)

    v = '9876500043210987654321'
    a = compress(v)
    b = uncompress(a)
    ok(v === b)
  })

})
