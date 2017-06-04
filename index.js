'use strict'

function isStyleImport (moduleName) {
  return Boolean(moduleName.match(/\.(css|less|scss)$/))
}

exports = exports || {}
exports.default = function (styleApi) {
  var alias = styleApi.alias
  var and = styleApi.and
  var hasNoMember = styleApi.hasNoMember
  var isAbsoluteModule = styleApi.isAbsoluteModule
  var member = styleApi.member
  var moduleName = styleApi.moduleName
  var not = styleApi.not
  var sortNamedMembers = styleApi.sortNamedMembers
  var unicode = styleApi.unicode

  return [
    // none (don't sort them, because side-effects may need a particular ordering)
    {match: and(hasNoMember, not(moduleName(isStyleImport)))},
    {separator: true},

    // all absolute modules sorted by module name and members sorted by alias
    {match: and(isAbsoluteModule, not(moduleName(isStyleImport))), sort: moduleName(unicode), sortNamedMembers: alias(unicode)},
    {separator: true},

    // all relative modules sorted by module name and members sorted by alias
    {match: not(moduleName(isStyleImport)), sort: moduleName(unicode), sortNamedMembers: alias(unicode)},
    {separator: true},

    // all style imports
    {match: moduleName(isStyleImport), sort: moduleName(unicode), sortNamedMembers: alias(unicode)},
    {separator: true},
  ]
}
