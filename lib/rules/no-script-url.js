'use strict';

//--------------------------------------------------------------------------------------------------
// disallow `javascript:` urls
// @see http://eslint.org/docs/rules/no-script-url
//--------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const { error, warn, off } = require('../util/level');

module.exports = () => error();
