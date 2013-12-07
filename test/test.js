var assert = require('assert'),
    ack = require('../index.js');

assert.ok(ack.compare('filename.java', 'java'));
assert.ok(!ack.compare('files.txt', 'java'));
assert.equal(ack.lookup('weehee.js'), 'js');
assert.equal(ack.lookup(), undefined);
assert.equal(ack.lookup('blah.exe'), undefined);
var mdTest = ack.reverseLookup('markdown');
assert.equal(mdTest[0], 'md');
assert.equal(mdTest[1], 'markdown');
assert.equal(mdTest.length, 2);
var pyTest = ack.reverseLookup('python')
assert.equal(pyTest[0], 'py')
