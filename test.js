import test from 'ava';
import resolveFrom from '.';

test('resolveFrom()', t => {
	t.throws(() => resolveFrom(1, './fixture'), /got `number`/);
	t.throws(() => resolveFrom('fixture'), /got `undefined`/);

	t.regex(resolveFrom('fixture', './fixture'), /fixture\/fixture\.js$/);

	const moduleNotFoundError = t.throws(() => {
		resolveFrom('fixture', './nonexistent');
	}, Error);
	t.is(moduleNotFoundError.code, 'MODULE_NOT_FOUND');
	t.is(moduleNotFoundError.message, 'Cannot find module \'./nonexistent\'');

	const resolveFromfixture = resolveFrom.bind(null, 'fixture');
	t.regex(resolveFromfixture('./fixture'), /fixture\/fixture\.js$/);

	t.truthy(resolveFrom('./fixture/fixture-for-symlinks/symlink-target', 'foo'));
});

test('resolveFrom.silent()', t => {
	t.regex(resolveFrom.silent('fixture', './fixture'), /fixture\/fixture\.js$/);
	t.is(resolveFrom.silent('fixture', './nonexistent'), undefined);

	const silentResolveFromfixture = resolveFrom.silent.bind(null, 'fixture');
	t.regex(silentResolveFromfixture('./fixture'), /fixture\/fixture\.js$/);

	t.is(resolveFrom.silent('fixture-not-exists', './fixture'), undefined);
});
