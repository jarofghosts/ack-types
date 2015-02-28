ack-types
=========

[![Build Status](http://img.shields.io/travis/jarofghosts/ack-types.svg?style=flat)](https://travis-ci.org/jarofghosts/ack-types)

lookup ack type by filename

## usage

```js
var acktypes = require('ack-types')

// acktypes is an object mapping file extension to type

acktypes.compare(filename, type) // true or false
acktypes.lookup(filename) // type or array of types
acktypes.reverseLookup(type) // array of extensions associated with type
acktypes.allExtensions() // array of all extensions known
```

## license

MIT
