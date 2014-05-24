ack-type
====

[![Build Status](http://img.shields.io/travis/jarofghosts/ack-types.svg?style=flat)](https://travis-ci.org/jarofghosts/ack-types)

lookup ack type by filename

## usage

```js
var acktype = require('ack-type')

acktype.compare(filename, type) // true or false
acktype.lookup(filename) // type or array of types
acktype.reverseLookup(type) // array of extensions associated with type
acktype.allExtensions() // array of all extensions known
```

## license

MIT
