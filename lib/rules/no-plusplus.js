'use strict';

//--------------------------------------------------------------------------------------------------
// disallow the unary operators `++` and `--`
// @see http://eslint.org/docs/rules/no-plusplus
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => off();
