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
  t.plan(6)

  var mdTest = ack.reverseLookup('markdown')

  t.equal(mdTest[0], 'md');
  t.equal(mdTest[1], 'markdown')
  t.equal(mdTest[2], 'mkd')
  t.equal(mdTest.length, 3)

  var pyTest = ack.reverseLookup('python')

  t.equal(pyTest[0], 'py')
  t.equal(pyTest.length, 1)
})
