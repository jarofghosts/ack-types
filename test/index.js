var test = require('tape')

var ack = require('../')

test('compare filename and type', function(t) {
  t.plan(2)

  t.ok(ack.compare('filename.java', 'java'))
  t.ok(!ack.compare('files.txt', 'java'))
})

test('lookup filename for type', function(t) {
  t.plan(3)

  t.equal(ack.lookup('weehee.js'), 'js')
  t.equal(ack.lookup(), undefined)
  t.equal(ack.lookup('blah.exe'), undefined)
})

test('reverseLookup grabs extensions', function(t) {
  t.plan(2)

  var mdTest = ack.reverseLookup('markdown')
  var pyTest = ack.reverseLookup('python')

  t.deepEqual(mdTest, ['md', 'markdown', 'mdown', 'mkd'])
  t.deepEqual(pyTest, ['py'])
})

test('types holds all of the types', function(t) {
  t.plan(1)

  t.deepEqual(ack.types, require('../lib/types.json'))
})
