import test from 'ava';
import m from '.';

test('resolveFrom()', t => {
	t.throws(() => m(1, './fixture'), /got `number`/);
	t.throws(() => m('fixture'), /got `undefined`/);

	t.regex(m('fixture', './fixture'), /fixture\/fixture\.js$/);

	const moduleNotFoundError = t.throws(() => {
		m('fixture', './nonexistent');
	}, Error);
	t.is(moduleNotFoundError.code, 'MODULE_NOT_FOUND');
	t.is(moduleNotFoundError.message, 'Cannot find module \'./nonexistent\'');

	const resolveFromfixture = m.bind(null, 'fixture');
	t.regex(resolveFromfixture('./fixture'), /fixture\/fixture\.js$/);
});

test('resolveFrom.silent()', t => {
	t.regex(m.silent('fixture', './fixture'), /fixture\/fixture\.js$/);
	t.is(m.silent('fixture', './nonexistent'), null);

	const silentResolveFromfixture = m.silent.bind(null, 'fixture');
	t.regex(silentResolveFromfixture('./fixture'), /fixture\/fixture\.js$/);
});
