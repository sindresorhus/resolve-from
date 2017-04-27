'use strict';
const path = require('path');
const Module = require('module');

const _resolveFileName = (fromDir, fromFile, moduleId) => {
	return Module._resolveFilename(moduleId, {
		id: fromFile,
		filename: fromFile,
		paths: Module._nodeModulePaths(fromDir)
	});
};

const _resolveFrom = (fromDir, moduleId, silent) => {
	if (typeof fromDir !== 'string' || typeof moduleId !== 'string') {
		throw new TypeError('Expected `fromDir` and `moduleId` to be strings');
	}

	fromDir = path.resolve(fromDir);

	const fromFile = path.join(fromDir, 'noop.js');

	if (silent) {
		try {
			return _resolveFileName(fromDir, fromFile, moduleId);
		} catch (err) {
			return null;
		}
	}

	return _resolveFileName(fromDir, fromFile, moduleId);
};

module.exports = _resolveFrom;

module.exports.silent = (fromDir, moduleId) => _resolveFrom(fromDir, moduleId, true);
