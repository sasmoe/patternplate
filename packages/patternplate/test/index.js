import test from 'ava';
import patternplate from '../src';

test('it should export a function', t => {
	t.is(typeof patternplate, 'function');
});
