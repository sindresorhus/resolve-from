import test from 'ava';
import m from './';

test(t => {
	t.throws(() => m(1, './fixture'), 'Expected `fromDir` to be of type `string`, got `number`');
	t.throws(() => m('fixture'), 'Expected `moduleId` to be of type `string`, got `undefined`');
	t.regex(m('fixture', './fixture'), /fixture\/fixture\.js$/);
	t.is(m('fixture', './fixture2'), null);
});
