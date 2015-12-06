import test from 'ava';
import fn from './';

test(t => {
	t.regexTest(/fixture\/fixture\.js$/, fn('fixture', './fixture'));
	t.is(fn('fixture', './fixture2'), null);
});
