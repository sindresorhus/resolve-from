# resolve-from [![Build Status](https://travis-ci.org/sindresorhus/resolve-from.svg?branch=master)](https://travis-ci.org/sindresorhus/resolve-from)

> Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from a given path


## Install

```
$ npm install resolve-from
```


## Usage

```js
const resolveFrom = require('resolve-from');

// There is a file at `./foo/bar.js`

resolveFrom('foo', './bar');
//=> '/Users/sindresorhus/dev/test/foo/bar.js'
```


## API

### resolveFrom(fromDirectory, moduleId)

Like `require()`, throws when the module can't be found.

### resolveFrom.silent(fromDirectory, moduleId)

Returns `undefined` instead of throwing when the module can't be found.

#### fromDirectory

Type: `string`

Directory to resolve from.

#### moduleId

Type: `string`

What you would use in `require()`.


## Tip

Create a partial using a bound function if you want to resolve from the same `fromDirectory` multiple times:

```js
const resolveFromFoo = resolveFrom.bind(null, 'foo');

resolveFromFoo('./bar');
resolveFromFoo('./baz');
```


## Related

- [resolve-cwd](https://github.com/sindresorhus/resolve-cwd) - Resolve the path of a module from the current working directory
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [import-cwd](https://github.com/sindresorhus/import-cwd) - Import a module from the current working directory
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import a module lazily
- [resolve-global](https://github.com/sindresorhus/resolve-global) - Resolve the path of a globally installed module


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-resolve-from?utm_source=npm-resolve-from&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
