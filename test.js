'use strict';
var test = require('ava');
var resolveFrom = require('./');

test('resolve module', function (t) {
	t.assert(/fixture\/fixture\.js$/.test(resolveFrom('fixture', './fixture')));
});
