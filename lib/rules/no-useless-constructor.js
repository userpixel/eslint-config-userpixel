'use strict';

//--------------------------------------------------------------------------------------------------
// disallow unnecessary constructors
// @see http://eslint.org/docs/rules/no-useless-constructor
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
