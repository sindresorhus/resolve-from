import test from 'ava';
import m from './';

test(t => {
	t.regex(m('fixture', './fixture'), /fixture\/fixture\.js$/);
	t.is(m('fixture', './fixture2'), null);
});
