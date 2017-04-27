'use strict';
const path = require('path');
const Module = require('module');

const resolveFileName = (fromDir, fromFile, moduleId) => {
	return Module._resolveFilename(moduleId, {
		id: fromFile,
		filename: fromFile,
		paths: Module._nodeModulePaths(fromDir)
	});
};

const resolveFrom = (fromDir, moduleId, silent) => {
	if (typeof fromDir !== 'string' || typeof moduleId !== 'string') {
		throw new TypeError('Expected `fromDir` and `moduleId` to be strings');
	}

	fromDir = path.resolve(fromDir);

	const fromFile = path.join(fromDir, 'noop.js');

	if (silent) {
		try {
			return resolveFileName(fromDir, fromFile, moduleId);
		} catch (err) {
			return null;
		}
	}

	return resolveFileName(fromDir, fromFile, moduleId);
};

module.exports = (fromDir, moduleId) => resolveFrom(fromDir, moduleId);

module.exports.silent = (fromDir, moduleId) => resolveFrom(fromDir, moduleId, true);
