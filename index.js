var path = require('path')

var types = require('./lib/types')

exports.reverseLookup = reverseLookup
exports.lookup = lookup
exports.compare = compare
exports.allExtensions = allExtensions
exports.types = types

function lookup(filename) {
  if(!filename) return

  return types[path.extname(filename).slice(1)]
}

function compare(filename, type) {
  if(!filename) return false

  var fileType = types[path.extname(filename).slice(1)]

  if(fileType === type) return true

  if(Array.isArray(fileType)) {
    for(var i = 0, l = fileType.length; i < l; ++i) {
      if(fileType[i] === type) return true
    }
  }

  return false
}

function reverseLookup(type) {
  if(!type) return

  var k = Object.keys(types)
    , results = []
    , name

  for(var i = 0, l = k.length; i < l; ++i) {
    name = k[i]
    if ((types[name] === type ||
      (Array.isArray(types[name]) && types[name].indexOf(type) !== -1))
      && results.indexOf(name) === -1) results.push(name)
  }

  return results
}

function allExtensions() {
  return Object.keys(types)
}
