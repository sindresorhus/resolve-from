import {expectType} from 'tsd';
import resolveFrom = require('.');

expectType<string>(resolveFrom('foo', './bar'));
expectType<string | undefined>(resolveFrom.silent('foo', './baz'));
