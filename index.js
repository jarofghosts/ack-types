var path = require('path'),
    types = {
      'as': 'actionscript',
      'mxml': 'actionscript',
      'ada': 'ada',
      'adb': 'ada',
      'ads': 'ada',
      'asm': 'asm',
      's': 'asm',
      'asp': 'asp',
      'aspx': 'aspx',
      'master': 'aspx',
      'ascx': 'aspx',
      'asmx': 'aspx',
      'svc': 'aspx',
      'bat': 'batch',
      'cmd': 'batch',
      'c': 'cc',
      'h': 'cc',
      'xs': 'cc',
      'cfc': 'cfmx',
      'cfm': 'cfmx',
      'cfml': 'cfmx',
      'clj': 'clojure',
      'cmake': 'cmake',
      'cpp': 'cpp',
      'cc': 'cpp',
      'cxx': 'cpp',
      'm': ['cpp', 'objc'],
      'hpp': 'cpp',
      'hh': 'cpp',
      'h': ['cpp', 'hh', 'objc', 'objcpp'],
      'hxx': 'cpp',
      'cs': 'csharp',
      'css': 'css',
      'pas': 'delphi',
      'int': 'delphi',
      'dfm': 'delphi',
      'nfm': 'delphi',
      'dof': 'delphi',
      'dpk': 'delphi',
      'dproj': 'delphi',
      'groupproj': 'delphi',
      'bdsgroup': 'delphi',
      'bdsproj': 'delphi',
      'el': 'elisp',
      'erl': 'erlang',
      'hrl': 'erlang',
      'f': 'fortran',
      'f77': 'fortran',
      'f90': 'fortran',
      'f95': 'fortran',
      'f03': 'fortran',
      'for': 'fortran',
      'ftn': 'fortran',
      'fpp': 'fortran',
      'go': 'go',
      'groovy': 'groovy',
      'gtmpl': 'groovy',
      'gpp': 'groovy',
      'grunit': 'groovy',
      'gradle': 'groovy',
      'hs': 'haskell',
      'lhs': 'haskell',
      'htm': 'html',
      'html': 'html',
      'java': 'java',
      'properties': 'java',
      'js': 'js',
      'json': 'json',
      'jsp': 'jsp',
      'jspx': 'jsp',
      'jhtm': 'jsp',
      'jhtml': 'jsp',
      'lisp': 'lisp',
      'lsp': 'lisp',
      'lua': 'lua',
      'mk': 'make',
      'mak': 'make',
      'ml': 'ocaml',
      'mli': 'ocaml',
      'pir': 'parrot',
      'pasm': 'parrot',
      'pmc': 'parrot',
      'ops': 'parrot',
      'pod': ['parrot', 'perl'],
      'pg': 'parrot',
      'tg': 'parrot',
      'pl': 'perl',
      'pm': 'perl',
      't': 'perl',
      'php': 'php',
      'phpt': 'php',
      'php4': 'php',
      'php5': 'php',
      'phtml': 'php',
      'pt': 'plone',
      'cpt': 'plone',
      'metadata': 'plone',
      'cpy': 'plone',
      'py': ['plone', 'python'],
      'R': 'rr',
      'rb': 'ruby',
      'rhtml': 'ruby',
      'rjs': 'ruby',
      'rxml': 'ruby',
      'erb': 'ruby',
      'rake': 'ruby',
      'spec': 'ruby',
      'rs': 'rust',
      'scala': 'scala',
      'scm': 'scheme',
      'ss': 'scheme',
      'sh': 'bash',
      'bash': 'bash',
      'csh': 'bash',
      'tcsh': 'bash',
      'ksh': 'bash',
      'zsh': 'bash',
      'st': 'smalltalk',
      'sql': 'sql',
      'ctl': ['sql', 'vb'],
      'tcl': 'tcl',
      'itcl': 'tcl',
      'itk': 'tcl',
      'tex': 'tex',
      'cls': ['tex', 'vb'],
      'sty': 'tex',
      'tt': 'tt',
      'tt2': 'tt',
      'ttml': 'tt',
      'bas': 'vb',
      'frm': 'vb',
      'vb': 'vb',
      'resx': 'vb',
      'v': 'verilog',
      'vh': 'verilog',
      'sv': 'verilog',
      'vhd': 'vhdl',
      'vhdl': 'vhdl',
      'vim': 'vim',
      'xml': 'xml',
      'dtd': 'xml',
      'xsl': 'xml',
      'xslt': 'xml',
      'ent': 'xml',
      'yaml': 'yaml',
      'yml': 'yaml',
      'md': 'markdown',
      'markdown': 'markdown'
    };


function lookup(filename) {
  if (!filename) return undefined;
  return types[path.extname(filename).substring(1)];
}

function compare(filename, type) {
  if (!filename) return false;
  fileType = types[path.extname(filename).substring(1)];
  if (fileType == type) return true;
  if (fileType instanceof Array) {
    var i = 0,
        l = fileType.length;
    for (; i < l; ++i) {
      if (fileType[i] == type) return true
    }
  }
  return false;
}

function reverseLookup(type) {
  if (!type) return undefined;
  var i = 0,
      k = Object.keys(types),
      l = k.length,
      results = [];

  for (; i < l; ++i) {
    var name = k[i];
    if (types[name] == type && results.indexOf(name) == -1) results.push(name);
  }

  return results;
}

module.exports.reverseLookup = reverseLookup;
module.exports.lookup = lookup;
module.exports.compare = compare;
