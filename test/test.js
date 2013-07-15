var assert = require('assert'),
    ack = require('../index.js');

assert.ok(ack.compare('filename.java', 'java'));
assert.ok(!ack.compare('files.txt', 'java'));
assert.equal(ack.lookup('weehee.js'), 'js');
assert.equal(ack.lookup(), undefined);
assert.equal(ack.lookup('blah.exe'), undefined);
