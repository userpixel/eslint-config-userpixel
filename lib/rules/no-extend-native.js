'use strict';

//--------------------------------------------------------------------------------------------------
// disallow extending native types
// @see http://eslint.org/docs/rules/no-extend-native
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => warn();
