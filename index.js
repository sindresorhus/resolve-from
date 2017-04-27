'use strict';
const path = require('path');
const Module = require('module');

module.exports = (fromDir, moduleId) => {
	if (typeof fromDir !== 'string' || typeof moduleId !== 'string') {
		throw new TypeError('Expected `fromDir` and `moduleId` to be strings');
	}

	fromDir = path.resolve(fromDir);

	const fromFile = path.join(fromDir, 'noop.js');

	try {
		return Module._resolveFilename(moduleId, {
			id: fromFile,
			filename: fromFile,
			paths: Module._nodeModulePaths(fromDir)
		});
	} catch (err) {
		return null;
	}
};
